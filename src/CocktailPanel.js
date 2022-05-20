import React from "react";
import { Row } from "react-bootstrap";
import CocktailImage from "./CocktailImage";
import CocktailIngridients from "./CocktailIngridients";
import CocktailRecipe from "./CocktailRecipe";

class CocktailPanel extends React.Component {
  render() {
    return this.props.cocktailData.map((cocktail) => (
      <Row key={cocktail.strDrink} className="panel px-0 mb-4">
        <div className="text-center px-0">
          <h3 className="card-header">{cocktail.strDrink}</h3>
        </div>
        <CocktailImage img={cocktail.strDrinkThumb} />
        <CocktailIngridients ingridients={cocktail.ingridients} />
        <CocktailRecipe recipe={cocktail.strInstructions} />
      </Row>
    ));
  }
}

export default CocktailPanel;
