import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pagina/auth/Login.jsx";
import Cadastro from "./pagina/auth/Cadastro.jsx";
import GerenciadorTarefas from "./pagina/app/GerenciadorTarefas.jsx";
import PrivateRoute from "./componentes/auth/PrivateRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route element={ <PrivateRoute/> } />
        <Route path="/gerenciadorTarefas" element={<GerenciadorTarefas />} />
      </Routes>
    </Router>
  );
};
export default App;