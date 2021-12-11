
import React, { Component } from 'react'

class App extends Component {
  // state = {number:5}
  state = {number:this.props.number} //igualamos a la props en el componente o default en la parte de abajo.
  //las funciones relacionadas con eventos tienen adelande la palabra handle(manejador)
  // handleClick(){   =>de esta forma no funcionara el setState, la mejor manera es usar funciones de flecha.
  //   // console.log("Click");
  //   //NUNCA HACER ESTO
  //   // this.state.number ++
  
  // se usa setSate para cambiar el estado
  //   this.setState({
  //     number: this.state.number + 1
  //   })
  // }

  // handleClick =()=>{ 
  //   this.setState({
  //     number: this.state.number + 1
  //   })
  // }
  handleIncrement =()=>{
    this.setState({
      number: this.state.number + 1
    })
  }
  handleDecrement =()=>{
    this.setState({
      number: this.state.number -1
    })
  }
  handleReset =()=>{
    this.setState({
      number: 0
    })
  }
  render() {
    return (
      <>
        <h1> Number: {this.state.number}</h1>
        {/* <button onClick={this.handleClick}>Increment</button> aqui se llama a la funcion manejadora de evento */}
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}

// Propiedades por defecto, si no se pasan prorps en el componente
App.defaultProps = {
  number: 0
}

export default App;