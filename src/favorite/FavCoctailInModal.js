import React from "react";
import { Col, Modal } from "react-bootstrap";
import CocktailIngridients from "../main/CocktailIngridients";

class FavCoctailInModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.closeModalHandler}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="w-100 text-center ms-4"
            id="contained-modal-title-vcenter"
          >
            {this.props.favCoctailInModal.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-wrap">
          <Col md={4} className="text-center p-3">
            <img
              height="300"
              className="cocktail-image rounded mx-auto d-block"
              src={this.props.favCoctailInModal.img}
              alt={this.props.favCoctailInModal.name}
            />
          </Col>
          <CocktailIngridients
            ingridients={this.props.favCoctailInModal.ingridients}
          />
          <Col md={4} className="p-3">
            <h4 className="text-center">Recipe:</h4>
            <div>{this.props.favCoctailInModal.recipe}</div>
          </Col>
        </Modal.Body>
      </Modal>
    );
  }
}

export default FavCoctailInModal;
