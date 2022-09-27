import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainNavigation from "./shared/UIElement/Navigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
