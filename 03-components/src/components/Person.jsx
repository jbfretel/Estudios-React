import React from 'react';

const Person = (props) => {
  console.log(props);
  return (
    
    <p>Soy {props.name} y tengo {props.age} años</p>
  )

}

export default Person