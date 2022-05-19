import CocktailPanel from "./CocktailPanel";
import ButtonsAndSpinner from "./ButtonsAndSpinner";
import React from "react";
import { Container } from "react-bootstrap";

class LoadCocktail extends React.Component {
  state = {
    cocktailData: [],
    defaultShow: "",
    hideShowSpinner: "hide",
  };

  clickHandler = async (event) => {
    event.preventDefault();

    let t = event.target;
    if (!t.classList.contains("load-cocktail")) return true;
    t.classList.add("disabled");
    this.setState({
      hideShowSpinner: "",
      defaultShow: "hide",
    });

    let url = "https://cocktail.mikhailiatsien1.repl.co/random";
    let response = await fetch(url);
    let cocktailData = await response.json();
    cocktailData.ingridients = [];

    for (let i = 1; i <= 15; i++) {
      let ingr = "strIngredient" + i;
      if (cocktailData[ingr] !== null && cocktailData[ingr] !== "") {
        cocktailData.ingridients.push(cocktailData[ingr]);
      }
    }

    this.setState({
      hideShowSpinner: "hide",
      cocktailData: [...this.state.cocktailData, cocktailData],
    });
    t.classList.remove("disabled");
  };

  render() {
    return (
      <section
        onClick={this.clickHandler}
        id="main"
        className="bg-color-main height100 d-flex align-items-center"
      >
        <Container className="p-3">
          {this.state.cocktailData.map((coctail) => (
            <CocktailPanel
              key={coctail.strDrink}
              name={coctail.strDrink}
              img={coctail.strDrinkThumb}
              ingridients={coctail.ingridients}
              recipe={coctail.strInstructions}
            />
          ))}
          <ButtonsAndSpinner
            hideShowSpinner={this.state.hideShowSpinner}
            defaultShow={this.state.defaultShow}
          />
        </Container>
      </section>
    );
  }
}

export default LoadCocktail;
