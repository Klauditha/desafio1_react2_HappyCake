import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pages/Home/Home";
import Contacto from "./components/pages/Contacto/Contacto";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route basename="desafio1_react2_HappyCake" path="/" element={<Home />} />
        <Route basename="desafio1_react2_HappyCake" path="/contact" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
