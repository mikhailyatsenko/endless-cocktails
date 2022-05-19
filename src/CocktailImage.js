import React from "react";
import { Col } from "react-bootstrap";

class CocktailImage extends React.Component {
  render() {
    return (
      <Col md={4} className="text-center p-3">
        <img
          height="300"
          className="cocktail-image rounded mx-auto d-block"
          src={this.props.img}
          alt={this.props.name}
        />
      </Col>
    );
  }
}

export default CocktailImage;
