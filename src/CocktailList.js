import React from "react";
import { Row, Col } from "react-bootstrap";
import CocktailIngridients from "./CocktailIngridients";

class CocktailList extends React.Component {
  render() {
    return this.props.cocktailData.map((cocktail) => (
      <Row key={cocktail.name} className="panel px-0 mb-4">
        <div className="text-center px-0">
          <h3 className="card-header">{cocktail.name}</h3>
        </div>
        <Col md={4} className="text-center p-3">
          <img
            height="300"
            className="cocktail-image rounded mx-auto d-block"
            src={cocktail.img}
            alt={cocktail.name}
          />
        </Col>
        <CocktailIngridients ingridients={cocktail.ingridients} />
        <Col md={4} className="p-3">
          <h4 className="text-center">Recipe:</h4>
          <div>{cocktail.recipe}</div>
        </Col>
      </Row>
    ));
  }
}

export default CocktailList;
