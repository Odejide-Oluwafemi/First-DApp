import "./recipe.css";
import Markdown from 'react-markdown';

export default function Recipe(data) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Mistral AI Recommendation:</h2>
      <Markdown>{data.recipe}</Markdown>
    </section>);
}