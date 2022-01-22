import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index.js';
import ListaDeNotas from "./components/ListaDeNotas/index.js"

class App extends Component {
  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}
export default App;
