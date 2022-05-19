import React from "react";
import { Col } from "react-bootstrap";

class CocktailIngridients extends React.Component {
  render() {
    return (
      <Col md={4} className="p-3">
        <h4 className="text-center">Ingridients:</h4>
        <ul className="list-counter-square">
          {this.props.ingridients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Col>
    );
  }
}

export default CocktailIngridients;
