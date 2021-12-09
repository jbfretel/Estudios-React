import React from 'react';
import { generate as id } from 'shortid';

const Cards = ({info,children}) =>{
    console.log(children)
    return (
        <div className="card">
            <h2 className="card__title">{info.title}</h2>
            <img className="card__img" src={info.img} alt={info.title}/>
            <p className="card__description">{children}</p>
            <p className="card__author">{info.author}</p>
            <ul className="card__tags">{
                info.tags.map(tag=>(
                    <li key={id()} className="card__tag">{tag}</li>
                ))
            }</ul>
            <p className="card__views">{info.views}</p>
            <p className="card__date">{info.date}</p>
        </div>
        

    )

}
  
    

    
  


export default Cards