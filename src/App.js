import Home from "./HomeApp/Home.js";
import StaticPage from "./StaticPageApp/StaticPage.js";
import TodoApp from "./TodoApp/TodoApp.js";
import TravelJournal from "./TravelJournalApp/TravelJournal.js";

function App() {
  return (
    <>
      <TravelJournal/>
      <hr/>

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