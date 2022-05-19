import React from "react";
import { Col } from "react-bootstrap";

class CocktailRecipe extends React.Component {
  render() {
    return (
      <Col md={4} className="p-3">
        <h4 className="text-center">Recipe:</h4>
        <div>{this.props.recipe}</div>
      </Col>
    );
  }
}

export default CocktailRecipe;
