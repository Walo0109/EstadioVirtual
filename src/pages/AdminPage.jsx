import React from "react";
import { NavBar } from "./../components/Navbar";
import { Buscar } from "../components/Buscar";
import style from "./../css/Fondo.module.css";

export const AdminPage = () => {
  return (
    <>
          <NavBar />
          <div >
          <Buscar />
          </div>
    </>
  );
};
