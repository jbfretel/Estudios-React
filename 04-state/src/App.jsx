
import React, { Component } from 'react'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {otherNumber:5};
  // }
  // state = {otherNumber:5}  //=>inicializador de propiedad
  state = {otherNumber:5}
  render() {
    // const number = this.props.number
    const {number,name} = this.props   //this siempre dentro de un metodo,destructurando props del componente
    return (
      <h1>Class {name} {number}</h1>
    );
  }
}

export default App;