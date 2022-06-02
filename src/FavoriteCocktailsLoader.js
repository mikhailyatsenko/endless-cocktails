import React from "react";
import FavoriteList from "./FavoriteList";
import { Container } from "react-bootstrap";

class FavoriteCocktailsLoader extends React.Component {
  getFavoriteCocktails() {
    let favCocktails;
    localStorage.getItem("favCocktails") === null
      ? (favCocktails = [])
      : (favCocktails = JSON.parse(localStorage.getItem("favCocktails")));
    return favCocktails;
  }
  render() {
    return (
      <section
        id="favorite-cocktails"
        className="bg-color-main height100 d-flex"
      >
        <Container className="p-3">
          <FavoriteList favoriteCocktails={this.getFavoriteCocktails} />
        </Container>
      </section>
    );
  }
}

export default FavoriteCocktailsLoader;
