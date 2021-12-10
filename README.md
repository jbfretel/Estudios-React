# Estudios-React

Class Component video 33 react dorian

import React, { Component } from 'react'

class App extends Component {

  <!-- constructor(props) {
    super(props);
    this.state = {otherNumber:5}; --> existe otra forma de inicializar el estado sin usar contructor,    son los inicializadores de propiedad =>

    state = {otherNumber:5}  //=>inicializador de propiedad

state = {otherNumber:5}
render() {
// const number = this.props.number

    //this siempre dentro de un metodo,destructurando props del componente
    const {number,name} = this.props
    return (
      <h1>Class {name} {number}</h1>
    );

}
}
export default App;
