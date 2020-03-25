import React, { useState } from "react";

const Form = ({ setNewFood, newFood }) => {
  const [food, setFood] = useState({
    name: "",
    image: "",
    calories: ""
  });

  const handleChange = e =>
    setFood({ ...food, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (food.name === "") {
          return;
        }
        setNewFood([...newFood, food]);
      }}
    >
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={e => handleChange(e)}
      />
      <input
        type="text"
        placeholder="image"
        name="image"
        onChange={e => handleChange(e)}
      />
      <input
        type="text"
        placeholder="calories"
        name="calories"
        onChange={e => handleChange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
