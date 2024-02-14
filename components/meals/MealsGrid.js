import React from 'react'
import classes from './MealsGrid.module.css'
import MealItem from './MealItem'

const MealsGrid = ({meals}) => {
  return (
    <div>
        <ul className={classes.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MealsGrid