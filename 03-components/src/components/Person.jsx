import React from 'react';

const Person = ({name,age,birthday}) => { //destructuracion de props forma actual de trabajar con react
  return (
    
    <p>Soy {name} y tengo {age} años, naci en {birthday.getFullYear()}</p>
  )

}

export default Person