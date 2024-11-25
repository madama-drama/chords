import React, { FC, useEffect } from "react";
import cx from "classnames";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";

import Styles from "./app-header.module.css";
import { Layout } from "../layout/layout";
import { Register } from "../modal/registry/registry";
import { AppStore, useDispatch, useSelector } from "../../services";
import { close, open } from "../modal/store/slice";
import { Login } from "../modal/login/login";

interface IAppHeaderProps {
  page: string;
}

export const AppHeader: FC<IAppHeaderProps> = ({ page }) => {
  const openedModal = useSelector((store: AppStore) => store.modal.opened);

  const dispatch = useDispatch();

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { openedModal } = qs.parse(search);

    if (openedModal) {
      dispatch(open(openedModal as "login" | "registry"));
    }
  }, [dispatch, search]);

  const openModal = (modal: "login" | "registry") => () => {
    const path = `${pathname}?${qs.stringify({
      ...qs.parse(search),
      openedModal: modal,
    })}`;

    navigate(path, { replace: true });

    dispatch(open(modal));
  };

  const onClose = () => {
    const path = `${pathname}?${qs.stringify({
      ...qs.parse(search),
      openedModal: undefined,
    })}`;

    navigate(path, { replace: true });
    dispatch(close());
  };

  return (
    <>
      <Layout as="ul" classname={page==='chords'? Styles.chordsHeader : ''}>
        <li
          className={cx(
            Styles.title,
            page === "home" ? Styles.homeTitle : Styles.chordsTitle1
          )}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.passive
            }
          >
            главная
          </NavLink>
        </li>
        <li
          className={cx(
            Styles.title,
            page === "home" ? Styles.homeTitle : Styles.chordsTitle
          )}
        >
          <NavLink
            to="/myChords"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.passive
            }
          >
            мои аккорды
          </NavLink>
        </li>
        <li
          className={cx(
            Styles.title,
            Styles.cursor,
            page === "home" ? Styles.homeTitle : Styles.chordsTitle
          )}
          onClick={openModal("registry")}
        >
          вход
        </li>
        {page === "chords" ? <li className={Styles.miniLogo}>chords.</li> : null}
      </Layout>
      {openedModal === "registry" ? (
        <Register onClose={onClose} onClick={openModal("login")} />
      ) : null}
      {openedModal === "login" ? (
        <Login onClose={onClose} onClick={openModal("registry")} />
      ) : null}
    </>
  );
};
