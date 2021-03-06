import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Recipes from "./routes/Recipes";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route path="/my_bar" exact={true} component={Home} />
        <Route path="/my_bar/recipes" component={Recipes} />
        <Route path="/my_bar/about" component={About} />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
