import { useRef, useState } from "react";
import "./main.css";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
import {getRecipeFromMistral } from "../ai.js";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients([...ingredients, newIngredient]);
  }

  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const API_RESPONSE = await getRecipeFromMistral(ingredients);
    setRecipe(API_RESPONSE);
  }

  return (
    <main className="main-body">
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          className="add-ingredient-input"
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g oregano"
          name="ingredient"
        />

        <button className="add-ingredient-button">Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <Ingredients ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <Recipe recipe={recipe}/>}
    </main>
  );
}
