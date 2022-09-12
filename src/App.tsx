import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import SobreNos from './paginas/sobrenos/SobreNos';
import Home from './paginas/home/Home';
import Cadastro from './paginas/cadastro/Cadastro'

import './App.css';
import ListaTemas from './componentes/temas/listaTemas/ListaTemas';
import CadastroTemas from './componentes/temas/cadastroTemas/CadastroTemas';
import DeletarTemas from './componentes/temas/deletarTemas/DeletarTemas';

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path='/home' element={<Home />}></Route>

        <Route path='/sobrenos' element={<SobreNos />}></Route>

        <Route path='/' element={<Login />}></Route>

        <Route path='/login' element={<Login />}></Route>

        <Route path='/cadastro' element={<Cadastro />}></Route>

        <Route path='/temas'> <ListaTemas /></Route>

        <Route path='/temas'><ListaTemas /></Route>

        <Route path='/formularioTemas'><CadastroTemas /></Route>

        <Route path='/formularioTemas/:id'><CadastroTemas /></Route>

        <Route path='/deletarTemas/:id'><DeletarTemas /></Route>

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
