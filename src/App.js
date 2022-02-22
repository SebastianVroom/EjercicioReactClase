import './App.css';
import Header from './Header.js';
import React from 'react';
import Body from './Body';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={titulo:'Titulo ejercicio'}
    this.modTitulo = this.modTitulo.bind(this)
  }
  render(){
  return (
    <div>
    <Header titulo={this.state.titulo}/>
    <Body modtit={this.modTitulo}/>
    </div>
  );
  }
  modTitulo(){
    this.setState({titulo:'Titulo cambiado'})
  }
}
export default App;
