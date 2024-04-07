import React from "react";
import { NavBar } from "./../components/Navbar";
import { Buscar } from "../components/Buscar";
import { Footer } from "./../components/Footer";
import style from "./../css/Fondo.module.css";


export const HomePage = () => {
  return (
    <>
      <div className={style.fondo}>
        <div className={style.degradado}>
          <div >
            <Buscar />
          </div>
        </div>
      </div>
    </>
  )
}


