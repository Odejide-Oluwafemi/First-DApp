import Header from "./components/Header.js";
import Main from "./components/Main.js";
import "./AIRecipeApp.css";

export default function AIRecipeApp()
{
  return (
    <main className="ai-recipe-body">
      <Header/>
      <Main/>
    </main>
  );
}