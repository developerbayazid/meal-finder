import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';

const Meal = (props) => {
    const {strMeal, idMeal, strMealThumb} = props.meal;
    return (
        <div className='meal-details'>
            <img src={strMealThumb} alt={strMeal} />
            <h2>{strMeal}</h2>
            <Link to={`/meals/${idMeal}`}>
                <button>Meal Details</button>
            </Link>
        </div>
    );
};

export default Meal;