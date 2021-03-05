import React from "react";
import Cocktail from "./Cocktail";

const CocktailList = ({cocktails}) => {

  return (
    <div>
      {cocktails.map((drink) => {
        let recipe = {
          ingredient: [],
          measurement: [],
        };
        let ingredientIndex = 1;
        do {
          if (!drink[`strIngredient${ingredientIndex}`]) break;
          recipe.ingredient.push(drink[`strIngredient${ingredientIndex}`]);
          recipe.measurement.push(drink[`strMeasure${ingredientIndex}`]);
          ingredientIndex += 1;
        } while (!!drink[`strIngredient${ingredientIndex}`]);
        return (
          <Cocktail
            key={drink.idDrink}
            name={drink.strDrink}
            image={drink.strDrinkThumb}
            ingredients={recipe.ingredient}
            measurements={recipe.measurement}
            instruction={drink.strInstructions}
            glass={drink.strGlass}
          />
        );
      })}
    </div>
  );
}
    

export default CocktailList;