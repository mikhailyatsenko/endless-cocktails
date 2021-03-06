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
            key={cocktail.name}
            className="row panel px-0 mb-4"
          >
            <div className="card-header px-0 d-flex">
              <div className="w-100">
                <h3 className="mb-0 ms-5 text-center">{cocktail.name}</h3>
              </div>
              <span
                style={{ fontSize: "32px" }}
                className="pointer material-icons-outlined me-4"
                onClick={this.props.addToFavorite.bind(null, index)}
              >
                {this.props.cocktailInFav.includes(cocktail.name)
                  ? "bookmark"
                  : "bookmark_border"}
              </span>
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
                <span className="material-icons-outlined">remove_circle</span>
              </div>
            </OverlayTrigger>
          </motion.div>
        ))}
      </AnimatePresence>
    );
  }
}

export default CocktailList;
