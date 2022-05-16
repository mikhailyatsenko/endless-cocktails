import Cocktail from "./Cocktail";
import React from "react";

class LoadCocktail extends React.Component {
  state = {
    cocktailData: [],
    defaultHide: "hide",
    defaultShow: "",
    hideShowSpinner: "hide",
    buttonStatus: "",
  };

  clickHandler = async (event) => {
    event.preventDefault();

    let t = event.target;
    if (!t.classList.contains("load-cocktail")) return true;

    this.setState({
      buttonStatus: "disabled",
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
      defaultHide: "",
      buttonStatus: "",
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
          cocktailData={this.state.cocktailData}
          defaultHide={this.state.defaultHide}
          defaultShow={this.state.defaultShow}
          hideShowSpinner={this.state.hideShowSpinner}
          buttonStatus={this.state.buttonStatus}
        />
      </section>
    );
  }
}

export default LoadCocktail;
