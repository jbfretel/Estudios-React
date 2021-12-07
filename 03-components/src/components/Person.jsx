import React from 'react';

const Person = ({info,hobbies,bio,children}) => { //destructuracion de props forma actual de trabajar con react
  console.log(children) //children viene a ser el contenido dentro de la etiqueta del componente,en este caso <Person>children</Person>

  if(bio){  //las props son booleanos y vienen por defecto en true, si se quiere falso seria bio={false}
    return (
      <>
        <p>Soy {info.name} y tengo {info.age} años, naci en {info.birthday.getFullYear()}. mis hobbies son {hobbies.join(' ')}</p>
        {bio}
      </>
    )    
  }
  else {
    return <p>No hay persona</p>
  }
}

export default Person