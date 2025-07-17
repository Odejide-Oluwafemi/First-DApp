import { useState } from "react";

export default function Ingredients({ ingredients, getRecipe }) {
  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient + Math.random() * ingredients.length}>{ingredient}</li>
  ));
  return (
    <section className="added-ingredient-container">
      <h2>Ingredient List:</h2>
      <ul>{ingredientsList}</ul>

      {ingredientsList.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a Recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>

          <button onClick={getRecipe}>Get Recipe</button>
        </div>
      )}
    </section>
  );
}
