import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { AdminPage } from "../pages/AdminPage";
import { ReservePage } from "../pages/ReservePage";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/reserve" element={<ReservePage />} />
      </Routes>
    </>
  );
};

export default Rutas;
