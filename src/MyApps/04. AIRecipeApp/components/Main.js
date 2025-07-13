import { useRef, useState } from "react";
import "./main.css";

export default function Main()
{
  const [ingredients, setIngredients] = useState([]);
  const inputBox = useRef();
  const ingredientsList = ingredients.map((ingredient) => <li>{ingredient}</li>);

  function handleSubmit(event)
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient= formData.get("ingredient");

    setIngredients([...ingredients, newIngredient]);

    inputBox.current.value = "";
  }

  return(
    <main className="main-body">
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input className="add-ingredient-input"
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g oregano"
          name="ingredient"
          ref={inputBox}
        />

        <button className="add-ingredient-button">Add Ingredient</button>
      </form>

      <div className="added-ingredient-container">
        <h2>Ingredient List:</h2>
        <ul>
          {ingredientsList}
        </ul>
      </div>
    </main>
  );
}