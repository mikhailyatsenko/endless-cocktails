import CocktailList from "./CocktailList";
import ButtonsAndSpinner from "./ButtonsAndSpinner";
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

class CocktailLoader extends React.Component {
  state = {
    cocktailData: [],
    isLoading: false,
    cocktailInFav: this.getFavoriteCocktails().map((coctail) => coctail.name),
  };

  normalizeCocktailData(cocktailData) {
    const normalizeCoctail = {};

    const entriesIngr = Object.entries(cocktailData).filter((entrie) => {
      const key = entrie[0];
      const value = entrie[1];
      return key.includes("strIngredient") && value !== null && value !== "";
    });

    const ingridientsObj = Object.fromEntries(entriesIngr);

    normalizeCoctail.name = cocktailData.strDrink;
    normalizeCoctail.img = cocktailData.strDrinkThumb;
    normalizeCoctail.recipe = cocktailData.strInstructions;
    normalizeCoctail.ingridients = Object.values(ingridientsObj);

    return normalizeCoctail;
  }

  clickHandler = async () => {
    this.setState({
      isLoading: true,
    });

    let url = "https://cocktail.mikhailiatsien1.repl.co/random";
    let response = await fetch(url);
    let cocktailData = await response.json();

    cocktailData = this.normalizeCocktailData(cocktailData);

    this.setState({
      cocktailData: [...this.state.cocktailData, cocktailData],
      isLoading: false,
    });
  };

  removeCocktailHandler(index) {
    const newCocktailData = this.state.cocktailData;
    newCocktailData.splice(index, 1);
    this.setState({
      cocktailData: newCocktailData,
    });
  }

  addToFavoriteHandler(index) {
    const cocktailToFav = this.state.cocktailData[index];
    let favCocktails = this.getFavoriteCocktails();
    let done = false;

    if (favCocktails.length === 0) {
      favCocktails = [cocktailToFav];
      done = true;
      // console.log("add first cocktail to LS");
    } else {
      for (let i = 0; i < favCocktails.length; i++) {
        if (favCocktails[i].name === cocktailToFav.name) {
          favCocktails.splice(i, 1);
          done = true;
          // console.log("removed", i);
        }
      }
    }

    if (!done) favCocktails = [...favCocktails, cocktailToFav];

    localStorage.setItem("favCocktails", JSON.stringify(favCocktails));
    this.setState({
      cocktailInFav: favCocktails.map((coctail) => coctail.name),
    });
    // console.log("localStorage setted");
  }

  getFavoriteCocktails() {
    let favCocktails;
    localStorage.getItem("favCocktails") === null
      ? (favCocktails = [])
      : (favCocktails = JSON.parse(localStorage.getItem("favCocktails")));
    return favCocktails;
  }

  render() {
    return (
      <section
        id="main"
        className="bg-color-main height100 d-flex align-items-center"
      >
        <Container className="p-3">
          <CocktailList
            cocktailData={this.state.cocktailData}
            removeCocktail={this.removeCocktailHandler.bind(this)}
            addToFavorite={this.addToFavoriteHandler.bind(this)}
            cocktailInFav={this.state.cocktailInFav}
          />
          <ButtonsAndSpinner
            isLoading={this.state.isLoading}
            clickHandler={this.clickHandler}
            cocktailData={this.state.cocktailData}
          />
        </Container>
      </section>
    );
  }
}

export default CocktailLoader;
