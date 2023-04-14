import React from 'react';

const Recipe = ({ recipe }) => {
    return (
        <div className='recipe'>
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <ul>
                {recipe.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <p>{recipe.time}</p>
            <p>{recipe.difficulty}</p>
            <p>{recipe.rate}</p>
        </div>
    );
};

export default Recipe;