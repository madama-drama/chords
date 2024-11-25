import React, { FC, useState } from "react";

import Style from "./login.module.css";
import { Modal } from "../modal";

interface ILoginProps {
  onClose: () => void;
  onClick: ()=>void;
}

export const Login: FC<ILoginProps> = ({ onClose, onClick }) => {
  const [value, setValue] = useState({ email: "", password: "" });

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [evt.target.name]: evt.target.value });
  };

  return (
    <Modal onClose={onClose} title="Вход">
      <form className={Style.modalContent}>
        <input
          type="email"
          placeholder="e-mail"
          name="email"
          value={value.email}
          onChange={onChange}
          className={Style.input}
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          value={value.password}
          onChange={onChange}
          className={Style.input}
        />

        <button className={Style.button}>Войти</button>
      </form>
      <div className={Style.footerContent}>
        <p className={Style.notRegister}>Еще не зарегистрированы?</p>
        <button className={Style.register} onClick={onClick}>
          Зарегистрироваться
        </button>
      </div>
    </Modal>
  );
};
