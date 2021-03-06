import React, {Component} from "react";
import main_img from "../img/cocktail_main.jpg";
import "./Home.css";


class Home extends Component {
  render(){
    return (
      <div className="home_container">
        <img src={main_img} className="main_img" alt="main_img" />
      </div>
    );
  }
}

// function Home() {
//   return (
//     <div className="home_container">
//       <img src={ main_img } className="main_img" alt="main_img" />
//     </div>
//   );
// }

export default Home;