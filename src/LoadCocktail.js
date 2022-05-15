import Cocktail from "./Cocktail";
import React from "react";

class LoadCocktail extends React.Component {
  constructor() {
    super();
    this.state = {
      cocktailName: "",
      cocktailImage: "",
      cocktailIngridients: [],
      cocktailRecipe: "",
      defaultHide: "hide",
      defaultShow: "",
      hideShowSpinner: "hide",
    };
  }

  clickHandler = async (event) => {
    event.preventDefault();

    let t = event.target;
    if (!t.classList.contains("load-cocktail")) return true;

    this.setState({
      hideShowSpinner: "",
      defaultShow: "hide",
      defaultHide: "hide",
    });

    let url = "https://cocktail.mikhailiatsien1.repl.co/random";
    let response = await fetch(url);
    let cocktailData = await response.json();
    console.log(cocktailData);
    // let keysArray = Object.keys(cocktailData);
    // console.log(keysArray);
    let ingrArr = [];
    for (let i = 1; i <= 15; i++) {
      let ingr = "strIngredient" + i;
      ingrArr.push(cocktailData[ingr]);
    }

    console.log(ingrArr);

    let ingridients = ingrArr.filter((item) => item !== null && item !== "");
    console.log(ingridients);

    this.setState({
      hideShowSpinner: "hide",
      cocktailName: cocktailData.strDrink,
      cocktailImage: cocktailData.strDrinkThumb,
      cocktailIngridients: ingridients,
      cocktailRecipe: cocktailData.strInstructions,
      defaultHide: "",
    });
  };

  render() {
    return (
      <section
        onClick={this.clickHandler}
        id="main"
        className="bg-color-main height100 d-flex align-items-center"
      >
        <Cocktail
          name={this.state.cocktailName}
          image={this.state.cocktailImage}
          ingridients={this.state.cocktailIngridients}
          recipe={this.state.cocktailRecipe}
          hideClass={this.state.hideClass}
          defaultHide={this.state.defaultHide}
          defaultShow={this.state.defaultShow}
          hideShowSpinner={this.state.hideShowSpinner}
        />
      </section>
    );
  }
}

export default LoadCocktail;
