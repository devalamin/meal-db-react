import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const addToCart = props.addToCart;

    const { idMeal, strArea, strCategory, strMealThumb, strMeal, strInstructions } = props.meal;

    return (
        <div className='meal'>
            <h2>Name:{strMeal}</h2>
            <h4>Meal ID:{idMeal}</h4>
            <p>Origin:{strArea}</p>
            <p><small>Category:{strCategory}</small></p>
            <img src={strMealThumb} alt="" />
            <p><strong>How To Make:</strong>{strInstructions.slice(0, 100)} </p>
            <button onClick={() => addToCart(props.meal)}>Add</button>
        </div>
    );
};

export default Meal;