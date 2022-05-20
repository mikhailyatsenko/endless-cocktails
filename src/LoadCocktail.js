import CocktailPanel from "./CocktailPanel";
import ButtonsAndSpinner from "./ButtonsAndSpinner";
import React from "react";
import { Container } from "react-bootstrap";

class LoadCocktail extends React.Component {
  state = {
    cocktailData: [],
    isLoading: false,
    defaultShow: "",
  };

  normalizeCoctailData(cocktailData) {
    cocktailData.ingridients = [];
    for (let i = 1; i <= 15; i++) {
      let ingr = "strIngredient" + i;
      if (cocktailData[ingr] !== null && cocktailData[ingr] !== "") {
        cocktailData.ingridients.push(cocktailData[ingr]);
      }
    }
  }

  clickHandler = async (event) => {
    event.preventDefault();
    let t = event.target;
    if (!t.classList.contains("load-cocktail")) return true;

    this.setState({
      isLoading: true,
      defaultShow: "hide ",
    });

    let url = "https://cocktail.mikhailiatsien1.repl.co/random";
    let response = await fetch(url);
    let cocktailData = await response.json();

    this.normalizeCoctailData(cocktailData);

    this.setState({
      cocktailData: [...this.state.cocktailData, cocktailData],
      isLoading: false,
    });
  };

  render() {
    return (
      <section
        onClick={this.clickHandler}
        id="main"
        className="bg-color-main height100 d-flex align-items-center"
      >
        <Container className="p-3">
          <CocktailPanel cocktailData={this.state.cocktailData} />
          <ButtonsAndSpinner
            isLoading={this.state.isLoading}
            defaultShow={this.state.defaultShow}
          />
        </Container>
      </section>
    );
  }
}

export default LoadCocktail;
