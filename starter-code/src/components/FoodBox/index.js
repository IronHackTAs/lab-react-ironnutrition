import React, { useState } from "react";

export const FoodBox = ({
  food: { image, name, calories, quantity },
  setTodaysFood,
  todaysFood
}) => {
  const [value, setQuantity] = useState(quantity);

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={value}
                  onChange={e => setQuantity(e.target.value)}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() =>
                    setTodaysFood([
                      ...todaysFood,
                      { name, calories, quantity: value }
                    ])
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FoodBox;
