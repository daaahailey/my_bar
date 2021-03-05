import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Recipes from "./routes/Recipes";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/about" component={About} />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
