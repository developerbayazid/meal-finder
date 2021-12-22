import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './MealFinder.css';

const MealFinder = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [search])

    return (
        <div>
            <input onChange={(event) => setSearch(event.target.value)} type="text" name="" id="" placeholder='Search Your Favorite Meals' />
            <h3>Search: {search}</h3>
            <p>Meal Found: {meals?.length || 0}</p>
            <div className='meals'>
                {
                    meals?.map(meal => <Meal key={meal.strMeal} meal={meal} />)
                }
            </div>
        </div>
    );
};

export default MealFinder;