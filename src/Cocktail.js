import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

class Cocktail extends React.Component {
  buttonRef = React.createRef();

  componentDidUpdate() {
    if (this.props.cocktailData.length > 1) {
      this.buttonRef.current.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    }
  }

  render() {
    return (
      <Container className="p-3">
        <div className={this.props.defaultShow + " text-center"}>
          <h1 className="pb-3">Press button to generate cocktail</h1>
        </div>

        <div className={this.props.defaultHide}>
          <div className="text-center">
            <h1 className="pb-3">How abut this cocktail?</h1>
          </div>
          {this.props.cocktailData.map((coctail) => (
            <Row key={coctail.strDrink} className="px-0 mb-4 panel">
              <div className="text-center px-0">
                <h3 className="card-header">{coctail.strDrink}</h3>
              </div>
              <Col md={4} className="text-center p-3">
                <img
                  height="300"
                  className="cocktail-image rounded mx-auto d-block"
                  src={coctail.strDrinkThumb}
                  alt={coctail.strDrink}
                />
              </Col>
              <Col md={4} className="p-3">
                <h4 className="text-center">Ingridients:</h4>
                <ul className="list-counter-square">
                  {coctail.ingridients.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Col>
              <Col md={4} className="p-3">
                <h4 className="text-center">Recipe:</h4>
                <div>{coctail.strInstructions}</div>
              </Col>
            </Row>
          ))}
        </div>

        <div className={this.props.hideShowSpinner}>
          <div className="d-block mx-auto spinner-border" role="status"></div>
          <p className="text-center">Loading cocktail...</p>
        </div>

        <div className={this.props.defaultShow + " text-center pt-3"}>
          <Button
            variant="dark"
            className={this.props.buttonStatus + " load-cocktail btn-lg"}
          >
            Generate cocktail!
          </Button>
        </div>
        <div className={this.props.defaultHide + " text-center pt-3"}>
          <Button
            variant="dark"
            className={this.props.buttonStatus + " load-cocktail btn-lg"}
            ref={this.buttonRef}
          >
            Add another one cocktail
          </Button>
        </div>
      </Container>
    );
  }
}

export default Cocktail;
