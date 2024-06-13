import { Router } from "express";
import Home from "./pages/home/home";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Home />
      </Router>
    </div>
  );
};

export default App;
