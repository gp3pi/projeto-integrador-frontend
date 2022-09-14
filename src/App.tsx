import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./componentes/estaticos/navbar/Navbar";
import Footer from "./componentes/estaticos/footer/Footer";
import Login from "./paginas/login/Login";
import SobreNos from "./paginas/sobrenos/SobreNos";
import Home from "./paginas/home/Home";
import Cadastro from "./paginas/cadastro/Cadastro";
import DeletarPostagem from "./componentes/postagens/deletarPostagem/DeletarPostagem";

import "./App.css";
import ListaPostagem from "./componentes/postagens/listaPostagem/ListaPostagem";
import CadastroPostagem from "./componentes/postagens/cadastrarPostagem/CadastroPostagem";
import DeletarTemas from "./componentes/temas/deletarTema/DeletarTemas";
import CadastrarTema from "./componentes/temas/cadastrarTemas/CadastrarTema";
import ListaTemas from "./componentes/temas/listaTemas/ListaTemas";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/sobrenos" element={<SobreNos />}></Route>

          <Route path="/" element={<Login />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/cadastro" element={<Cadastro />}></Route>

          <Route path="/posts" element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPostagem />} />

          <Route
            path="/formularioPostagem/:id"
            element={<CadastroPostagem />}
          />

          <Route path="/temas" element={<ListaTemas />} />

          <Route path="/formularioTema" element={<CadastrarTema />} />

          <Route path="/formularioTema/:id" element={<CadastrarTema />} />

          <Route path="/deletarTema/:id" element={<DeletarTemas />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
