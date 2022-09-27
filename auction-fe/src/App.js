import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./shared/Layouts/Footer";
import MainNavigation from "./shared/UIElement/Navigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <MainNavigation /> */}
        <Routes></Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
