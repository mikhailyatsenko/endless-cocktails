import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

class Cocktail extends React.Component {
  render() {
    return (
      <Container className="p-3">
        <div className={this.props.defaultShow + " text-center"}>
          <h1 className="pb-3">Press button to generate cocktail</h1>
        </div>

        <div className={this.props.hideShowSpinner}>
          <div className="d-block mx-auto spinner-border" role="status"></div>
          <p className="text-center">Loading cocktail...</p>
        </div>

        <div className={this.props.defaultHide}>
          <div className="text-center">
            <h1 className="pb-3">How abut this cocktail?</h1>
          </div>
          <Row className={"px-0 pb-4 panel"}>
            <div className="text-center pb-4 px-0">
              <h3 className="card-header">{this.props.name}</h3>
            </div>
            <Col md={4} className="text-center p-3">
              <img
                className="cocktail-image rounded mx-auto d-block"
                src={this.props.image}
                alt={this.props.name}
              />
            </Col>
            <Col md={4} className="p-3">
              <h4 className="text-center">Ingridients:</h4>
              <ul className="list-counter-square">
                {this.props.ingridients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Col>
            <Col md={4} className="p-3">
              <h4 className="text-center">Recipe:</h4>
              <div>{this.props.recipe}</div>
            </Col>
          </Row>
          <div className="text-center pt-3">
            <Button variant="dark" className="load-cocktail btn-lg">
              Generate another cocktail
            </Button>
          </div>
        </div>

        <div className={this.props.defaultShow + " text-center pt-3"}>
          <Button variant="dark" className="load-cocktail btn-lg">
            Generate cocktail!
          </Button>
        </div>
      </Container>
    );
  }
}

export default Cocktail;
