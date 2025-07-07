import Home from "./HomeApp/Home.js";
import StaticPage from "./StaticPageApp/StaticPage.js";
import TodoApp from "./TodoApp/TodoApp.js";

function App() {
  return (
    <>
      
      <StaticPage/>
      <hr/>

      <Home />
      <hr/>
      
      <TodoApp />
      <hr/>
    </>
  );
}

export default App;