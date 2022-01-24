import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index.js';
import ListaDeNotas from "./components/ListaDeNotas/index.js"

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    console.log("Deletar");
    this.setState({notas:arrayNotas})
  }
  
  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas 
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas}/>
      </section>
    );
  }
}
export default App;
