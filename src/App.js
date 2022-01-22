import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index.js';
import ListaDeNotas from "./components/ListaDeNotas/index.js"

class App extends Component {
  
  constructor(props){
    super(props);
    this.notas = [];
  }


  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    this.notas.push(novaNota);
    console.log(this.notas.length)
  }
  
  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.notas}/>
      </section>
    );
  }
}
export default App;
