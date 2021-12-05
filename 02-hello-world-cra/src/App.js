import './App.css';
import {generate as id} from 'shortid' //clase ARRAYS libreria shortid

// SINTAXIS JSX Y CONDICIONALES
// function App() {
//   const name = "Jorge"
//   const age = 11
//   const login = false

//   // if(login)
//   //   return (    
//   //     <>
//   //       <h1>Hello World</h1>
//   //       <h1>Hello World 2</h1>
//   //       <img src="" alt=""/>
//   //       <p>Hola mi nombre es {name} y tengo {age *2}</p>
//   //     </>
//   //   );
//   //   else
//   //     return <p>Usuario anónimo</p>

//   // Operador ternario
//   // return login ? <p>Hola mi nombre es {name} y tengo {age *2}</p> : <p>Usuario anónimo</p>

//   // Operador ternario simplificado &&
//   return login && <p>Hola mi nombre es {name} y tengo {age *2}</p>
//   }

//  ARRAYS  para los id es mejor instalar una librerian desde npm llamada shortid => npm i shortid
function App(){
  const numbers = [1, 2, 3, 4, 5]
  const names = ['Dorian', 'Laura', 'Alex']

  // return <h1>{numbers}</h1>

  // manera correcta de leer arrays
  return(
    // <ul>
    //   <li>{names}</li>
    // </ul>
    <ul>
      {
        names.map(name=>{
          return <li key={id()}>{name}  {id()}</li>
        })
      }
    </ul>
  )
}

export default App;
