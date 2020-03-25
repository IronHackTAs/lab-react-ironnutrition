import React, { useState } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import Input from "./components/Input";
import TodaysFood from "./components/TodaysFood";
import Form from "./components/Form";

const App = () => {
  const [filter, setFilter] = useState("");
  const [todaysFood, setTodaysFood] = useState([]);
  const [isForm, setIsForm] = useState(false);
  const [newFood, setNewFood] = useState(foods);

  const renderFoods = () =>
    newFood.map(
      food =>
        food.name.toLowerCase().includes(filter.toLowerCase()) && (
          <FoodBox
            food={food}
            setTodaysFood={setTodaysFood}
            todaysFood={todaysFood}
            key={food.name}
          />
        )
    );

  return (
    <div className="App">
      <Input setFilter={setFilter} />
      <button onClick={() => setIsForm(!isForm)}>Add food</button>
      {isForm && <Form setNewFood={setNewFood} newFood={newFood} />}
      <div className="row">
        <div className="food-container">{renderFoods()}</div>
        <TodaysFood todaysFood={todaysFood} />
      </div>
    </div>
  );
};

export default App;
