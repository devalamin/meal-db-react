import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let mealName;
    for (const meal of cart) {
        mealName = meal.strMeal
    }
    console.log(mealName)
    return (
        <div className='cart'>
            <h1>Selected Items: {cart.length}</h1>
            <h2>Selected products</h2>
            {/* <h4>Name: {mealName}</h4> */}
            {
                cart.map(itemName => <h4>{itemName.strMeal}</h4>)
            }

        </div>
    );
};

export default Cart;