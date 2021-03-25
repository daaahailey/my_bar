import React, {Component} from "react";
import main_img from "../img/cocktail_main.jpg";
import "./Home.css";


class Home extends Component {
  render(){
    return (
      <div className="home_container">
        <div className="img_container">
          <img src={main_img} className="main_img" alt="main_img" />
        </div>
      </div>
    );
  }
}



export default Home;