import React from "react";
import { Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import CocktailIngridients from "./CocktailIngridients";
import { motion, AnimatePresence } from "framer-motion";

class CocktailList extends React.Component {
  render() {
    return (
      <AnimatePresence>
        {this.props.cocktailData.map((cocktail, index) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            // transition={{ duration: 2 }}
            key={cocktail.name}
            className="row panel px-0 mb-4"
          >
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
            <OverlayTrigger
              overlay={<Tooltip>Remove this cocktail</Tooltip>}
              placement="top"
            >
              <div
                className="text-center px-0 card-delete"
                onClick={this.props.removeCocktail.bind(null, index)}
              >
                <span className="material-icons">remove_circle</span>
              </div>
            </OverlayTrigger>
          </motion.div>
        ))}
      </AnimatePresence>
    );
  }
}

export default CocktailList;
