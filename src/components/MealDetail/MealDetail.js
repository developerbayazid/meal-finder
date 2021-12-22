import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetail.css';

const MealDetail = () => {
    const {id} = useParams();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data?.meals?.[0]))
    }, [id])

    const {strMeal, strCategory, strArea, strTags, strInstructions, strMealThumb} = meal;

    return (
        <div className='single-meal'>
            <img src={strMealThumb} alt={strMeal} />
            <h1>{strMeal}</h1>
            {
                strArea && <h3>Area: {strArea}</h3>
            }
            {
                strCategory && <h3>Category: {strCategory}</h3>
            }
            {
                strTags && <h3>Tags: {strTags}</h3>
            }
            {
                strInstructions && <p><strong>Instructions:</strong> {strInstructions}</p>
            }
        </div>
    );
};

export default MealDetail;