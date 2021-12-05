import React from 'react';

const Person = ({name,age}) => { //destructuracion de props forma actual de trabajar con react
  return (
    
    <p>Soy {name} y tengo {age} años</p>
  )

}

export default Person