import React from "react";
import { Row } from "react-bootstrap";
import CocktailImage from "./CocktailImage";
import CocktailIngridients from "./CocktailIngridients";
import CocktailRecipe from "./CocktailRecipe";

class CocktailPanel extends React.Component {
  render() {
    return (
      <Row className="panel px-0 mb-4">
        <div className="text-center px-0">
          <h3 className="card-header">{this.props.name}</h3>
        </div>
        <CocktailImage img={this.props.img} />
        <CocktailIngridients ingridients={this.props.ingridients} />
        <CocktailRecipe recipe={this.props.recipe} />
      </Row>
    );
  }
}

export default CocktailPanel;
