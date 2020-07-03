import './App.css';
import React, { Component } from 'react';
import { EntradaTexto } from './EntradaTexto';
import { ListarMensagens } from './ListarMensagens';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListarMensagens />
        <EntradaTexto />
      </div>
    );
  }
}
export default App;