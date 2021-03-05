import React from "react";
import './Cocktail.css';

function Cocktail({name, image, ingredients, measurements, instruction, glass}) {
    return (
      <div className="cocktail">
        <div className="container">
          <img className="cocktail_img" src={image} alt={name} />
          <div className="cocktail_info">
            <h1 className="cocktail_name">{name}</h1>
            <hr></hr>
            <div className="cocktail_recipe">
              <ul className="ingredients">
                {ingredients.map((ingredient, index) => {
                  return <li key={index + ingredient}>{ingredient}</li>;
                })}
              </ul>
              <ul className="measurements">
                {measurements.map((measurement, index) => {
                  return <li key={index + measurement}>{measurement}</li>;
                })}
              </ul>
            </div>
            <hr></hr>
            <p className="cocktail_glass">* Nicer with {glass}!</p>

            <p className="cocktail_instruction">{instruction}</p>
          </div>
        </div>
      </div>
    );
}


export default Cocktail;