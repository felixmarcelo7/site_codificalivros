import React, { Component, Fragment } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Topo from './components/Topo';
import Home from './components/Home';
import Frontend from './components/Frontend';
import Programacao from './components/Programacao';
import Design from './components/Design';
import Catalogo from './components/Catalogo';
import NotFound from './components/NotFound';
import Rodape from './components/Rodape';
import './index.css';
import Livro from './components/Livro';
import axios from 'axios';

const LivroRouteWrapper = ({ livros }) => {
  const { livroSlug } = useParams();
  const livro = livros.find((l) => l.slug === livroSlug);
  return livro ? <Livro livro={livro} /> : <NotFound />;
}

class App extends Component {
  state = {
    livros: [],
  };

  // componentDidMount() {
  //   fetch("/api/todosOsLivros.json")
  //     .then(response => response.json())
  //     .then(livros => this.setState({livros}))
  //     .catch(function(error) {
  //       document
  //         .querySelectorAll('.principal')[0]
  //         .insertAdjacentHTML(
  //           'beforeend',
  //           "<p class='error'>Mensagem de erro</p>"
  //         )
  //     })
  //     .finally(function() {
  //       console.log("Sempre retorna");
  //     });
  // }

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get(`${import.meta.env.BASE_URL}api/todosOsLivros.json`);
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll('.principal')[0]
        .insertAdjacentHTML(
          'beforeend',
          "<p class='error'>Mensagem de erro</p>"
        );
    }
  }

  render() {
    return (
      <>
        <Topo />
        <Routes>
          <Route path="/" element={<Home livros={this.state.livros} />} />
          <Route
            path="/frontend"
            element={<Frontend livros={this.state.livros} />}
          />
          <Route
            path="/programacao"
            element={<Programacao livros={this.state.livros} />}
          />
          <Route
            path="/design"
            element={<Design livros={this.state.livros} />}
          />
          <Route
            path="/catalogo"
            element={<Catalogo livros={this.state.livros} />}
          />
          <Route
            path="/livro/:livroSlug"
            element={<LivroRouteWrapper livros={this.state.livros} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </>
    );
  }
}

export default App;
