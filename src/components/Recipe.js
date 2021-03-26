import React from 'react';

const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img style={{borderRadius:'2px', width:"250px",height:"200px"}} src={image} alt=""/>
        </div>
    );
};

export default Recipe;