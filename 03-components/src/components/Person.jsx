import React from 'react';

const Person = ({info}) => { //destructuracion de props forma actual de trabajar con react
  return (
    
    <p>Soy {info.name} y tengo {info.age} años, naci en {info.birthday.getFullYear()}</p>
  )

}

export default Person