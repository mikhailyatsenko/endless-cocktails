import React from "react";
import FavCoctailInModal from "./FavCoctailInModal";
import { Card, Button, Stack } from "react-bootstrap";
import { motion } from "framer-motion";

class FavoriteList extends React.Component {
  render() {
    return (
      <>
        <div className="text-center my-3 undrln">
          <a href="/">← back to Main page</a>
        </div>
        <h1 className="text-center mb-2">Favorite cocktails</h1>

        {this.props.favoriteCocktails().length === 0 ? (
          <p className="text-center d-block">Favorite list is empty</p>
        ) : (
          <div className="d-flex flex-wrap justify-content-start">
            {this.props.favoriteCocktails().map((cocktail, index) => (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={index.toString()}
                className="col-sm-6 col-md-4 col-xxl-3"
              >
                <Card className="m-1" style={{ width: "auto" }}>
                  <Card.Img
                    variant="top"
                    src={cocktail.img}
                    alt={cocktail.name}
                  />
                  <Card.Body>
                    <Card.Title>{cocktail.name}</Card.Title>

                    <Stack gap={3} className="col-12 mx-auto">
                      <Button
                        variant="outline-dark"
                        onClick={this.props.showCoctailInModal.bind(
                          null,
                          index
                        )}
                      >
                        Show details
                      </Button>
                      <Button
                        variant="link"
                        className="text-center"
                        onClick={this.props.removeFromFavorite.bind(
                          null,
                          index
                        )}
                      >
                        Remove from favorite
                      </Button>
                    </Stack>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
        <FavCoctailInModal
          show={this.props.show}
          closeModalHandler={this.props.closeModalHandler}
          favCoctailInModal={this.props.favCoctailInModal}
        />
      </>
    );
  }
}

export default FavoriteList;
