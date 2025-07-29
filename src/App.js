import Home from "./MyApps/01. HomeApp/Home.js";
import StaticPage from "./MyApps/02. StaticPageApp/StaticPage.js";
import TodoApp from "./MyApps/00. TodoApp/TodoApp.js";
import TravelJournal from "./MyApps/03. TravelJournalApp/TravelJournal.js";
import AIRecipeApp from "./MyApps/04. AIRecipeApp/AIRecipeApp.js";
import SoundPadApp from "./MyApps/05. SoundPadApp/SoundPadApp.jsx";
import MemeGeneratorApp from "./MyApps/06. MemeGeneratorApp/MemeGeneratorApp.jsx";
import Tenzies from "./MyApps/07. Tenzies/Tenzies.jsx";

function App() {
  return (
    <>
      <Tenzies/>
      <hr/>

      <MemeGeneratorApp/>
      <hr/>
      
      <AIRecipeApp/>
      <hr/>
      
      <SoundPadApp/>
      <hr/>

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