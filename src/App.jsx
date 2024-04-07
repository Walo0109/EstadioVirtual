import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Rutas from "./Rutas/Rutas";

function App() {
  return (
    <>
      <NavBar />
      <Rutas />
      <Footer />

    </>
  );
};

export default App;