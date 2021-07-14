import logo from "./logo.svg";
import "./App.css";
import Classcomponents from "./components/Classcomponents";
import Functionalcomponents from "./components/Functionalcomponents";
function App() {
  return (
    <div className="App">
      <Classcomponents name="Iron man" age="40" />

      <Functionalcomponents name="hulk" age="35" />
    </div>
  );
}

export default App;
