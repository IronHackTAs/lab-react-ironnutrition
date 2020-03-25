import React from "react";
import { getTotCalories } from './utils';

const TodaysFood = ({ todaysFood }) => (
  <div>
    <h1>Today's food</h1>
    {todaysFood.map(({ name, quantity, calories }) => (
      <div>
        <b>Name:</b> {name} - <b>Quantity:</b> {quantity} - <b>Calories</b>:
        {calories}
      </div>
    ))}
    TOT Calories:{" "}
    {getTotCalories(todaysFood)}
  </div>
);

export default TodaysFood;
