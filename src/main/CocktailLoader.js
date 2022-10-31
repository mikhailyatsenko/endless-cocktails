import CocktailList from "./CocktailList";
import ButtonsAndSpinner from "./ButtonsAndSpinner";
import FavoriteCounter from "./FavoriteCounter";
import React from "react";
import { Container } from "react-bootstrap";

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

  generateButtonHandler = async () => {
    this.setState({
      isLoading: true,
    });

    let url = "https://haunted-pumpkin-52020.herokuapp.com/random";
    let response = await fetch(url);
    let cocktailData = await response.json();

    cocktailData = this.normalizeCocktailData(cocktailData);

    this.setState({
      cocktailData: [...this.state.cocktailData, cocktailData],
      isLoading: false,
    });
  };

  removeCocktailHandler(index) {
    const newCocktailData = this.state.cocktailData.filter((coctail) => coctail.name !== this.state.cocktailData[index].name);
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
    } else {
      for (let i = 0; i < favCocktails.length; i++) {
        if (favCocktails[i].name === cocktailToFav.name) {
          favCocktails.splice(i, 1);
          done = true;
        }
      }
    }

    if (!done) favCocktails = [...favCocktails, cocktailToFav];

    localStorage.setItem("favCocktails", JSON.stringify(favCocktails));
    this.setState({
      cocktailInFav: favCocktails.map((coctail) => coctail.name),
    });
  }

  getFavoriteCocktails() {
    let favCocktails;
    localStorage.getItem("favCocktails") === null ? (favCocktails = []) : (favCocktails = JSON.parse(localStorage.getItem("favCocktails")));
    return favCocktails;
  }

  render() {
    return (
      <section id="main" className="bg-color-main height100 d-flex align-items-center">
        <Container className="p-3">
          <CocktailList cocktailData={this.state.cocktailData} removeCocktail={this.removeCocktailHandler.bind(this)} addToFavorite={this.addToFavoriteHandler.bind(this)} cocktailInFav={this.state.cocktailInFav} />
          <ButtonsAndSpinner isLoading={this.state.isLoading} generateButtonHandler={this.generateButtonHandler} cocktailData={this.state.cocktailData} />
          <FavoriteCounter cocktailInFav={this.state.cocktailInFav} />
        </Container>
      </section>
    );
  }
}

export default CocktailLoader;
