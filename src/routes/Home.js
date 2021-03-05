import React from "react";
import main_img from "../img/cocktail_main.jpg";
import "./Home.css";

function Home() {
  return <div className="home_container">
        <img src={main_img} className="main_img"/>
      </div>
}

export default Home;