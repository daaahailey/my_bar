import React, { Component } from "react";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchBox from "../components/SearchBox";


class Recipes extends Component {

  constructor() {
    super();
    this.state = {
      drinks: [],
      searchfield: "",
    };
  }

  getCocktail = async () => {
    const {
      data: { drinks },
    } = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin"
    );
    const removeLastItem = drinks.pop(); // last item is not gin based cocktail
    // console.log(drinks);
    this.setState({ drinks, searchfield: "" });
  };

  componentDidMount() {
    this.getCocktail();
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    // console.log(this.setState)
  }

  render() {
    const { drinks, searchfield } = this.state;
    const filteredDrinks =  drinks.filter((drink) => {
       return drink.strDrink.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div>
        {!drinks.length ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <SearchBox searchChange={this.onSearchChange}/>
            <CocktailList cocktails={filteredDrinks} />
          </div>
        )}
      </div>
    );

  }
}
export default Recipes;
