import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from './Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const addToCart = (meals) => {
        // console.log(meals)
        const newCart = [...cart, meals]
        setCart(newCart)

    }

    return (
        <div className='main-container'>
            <h1>This is meals</h1>
            <div className="sub-container">
                <div className="db-container">

                    {
                        meals.map(meal => <Meal
                            meal={meal}
                            key={meal.idMeal}
                            addToCart={addToCart}
                        ></Meal>)
                    }
                </div>
                <div className="cart-container">

                    <Cart cart={cart}></Cart>

                </div>
            </div>

        </div>
    );
};

export default Meals;