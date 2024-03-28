import React from "react";
import { NavBar } from "./../components/Navbar";
import { Buscar } from "../components/Buscar";
import style from "./../css/Fondo.module.css";

export const ContactPage = () => {
  return (
    <>
      <div className={style.fondo}>
        <div className={style.degradado}>
          <NavBar />
          <div >
            <Buscar />
          </div>
        </div>
      </div>
    </>
  );
};
