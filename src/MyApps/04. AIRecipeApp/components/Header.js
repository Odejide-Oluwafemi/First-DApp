import "./header.css";

export default function Header()
{
  return (
    <header className="ai-recipe-app-header-body">
      <span className="ai-recipe-app-header-content">
        <img className="ai-recipe-app-logo" src="../ai_recipe_app_logo.png"/>
        <h1 className="ai-recipe-app-header-title">AI Recipe App</h1>
      </span>
    </header>
  );
}