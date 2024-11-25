import React, { ChangeEvent, FC, useState } from "react";
import Style from "./registry.module.css";
import { Modal } from "../modal";

interface IRegisterProps {
  onClose: () => void;
  onClick: ()=> void;
}

export const Register: FC<IRegisterProps> = ({ onClose, onClick }) => {

  const [value, setValue] = useState({ email: "", password: "", name: "" });

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [evt.target.name]: evt.target.value });
  };


  return (
    <>
      <Modal onClose={onClose} title="Регистрация">
        <form className={Style.modalContent}>
          <input
          type="text"
          placeholder="name"
          name="name"
          value={value.name}
          onChange={onChange}
          className={Style.input}
          />

          <input
            type="text"
            placeholder="e-mail"
            name="email"
            value={value.email}
            onChange={onChange}
            className={Style.input}
          />

          <input
            type="text"
            placeholder="password"
            name="password"
            value={value.password}
            onChange={onChange}
            className={Style.input}
          />

          <button className={Style.button}>зарегистрироваться</button>
        </form>
        <div className={Style.footerContent}>
          <p className={Style.alreadyRegister}>Уже зарегистрированы?</p>
          <button className={Style.login} onClick={onClick}>
            Войти
          </button>
        </div>
      </Modal>
    </>
  );
};
