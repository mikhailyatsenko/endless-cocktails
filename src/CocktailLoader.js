import CocktailList from "./CocktailList";
import ButtonsAndSpinner from "./ButtonsAndSpinner";
import React from "react";
import { Container } from "react-bootstrap";

class CocktailLoader extends React.Component {
  state = {
    cocktailData: [],
    isLoading: false,
  };

  normalizeCocktailData(cocktailData) {
    const normalizeCoctail = {};

    const entriesIngr = Object.entries(cocktailData).filter(
      (key) =>
        key[0].includes("strIngredient") && key[1] !== null && key[1] !== ""
    );

    const ingridientsObj = Object.fromEntries(entriesIngr);

    normalizeCoctail.name = cocktailData.strDrink;
    normalizeCoctail.img = cocktailData.strDrinkThumb;
    normalizeCoctail.recipe = cocktailData.strInstructions;
    normalizeCoctail.ingridients = Object.values(ingridientsObj);

    return normalizeCoctail;
  }

  clickHandler = async (event) => {
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
    this.state.cocktailData.splice(index, 1);
    this.setState({
      cocktailData: this.state.cocktailData,
    });
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
