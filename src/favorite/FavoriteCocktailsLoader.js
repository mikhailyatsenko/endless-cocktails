import React from "react";
import FavoriteList from "./FavoriteList";
import { Container } from "react-bootstrap";

class FavoriteCocktailsLoader extends React.Component {
  state = {
    cocktailInFav: this.getFavoriteCocktails().map((coctail) => coctail.name),
    showModal: false,
    favCoctailInModal: {},
  };

  getFavoriteCocktails() {
    let favCocktails;
    localStorage.getItem("favCocktails") === null
      ? (favCocktails = [])
      : (favCocktails = JSON.parse(localStorage.getItem("favCocktails")));
    return favCocktails;
  }

  showCoctailInModal(index) {
    const favCocktails = this.getFavoriteCocktails();

    this.setState({
      showModal: true,
      favCoctailInModal: favCocktails[index],
    });
  }

  closeFavInModal() {
    this.setState({
      showModal: false,
    });
  }

  removeFromFavorite(index, event) {
    const favCocktails = this.getFavoriteCocktails();

    favCocktails.splice(index, 1);

    localStorage.setItem("favCocktails", JSON.stringify(favCocktails));
    this.setState({
      cocktailInFav: favCocktails.map((coctail) => coctail.name),
    });
  }

  render() {
    return (
      <section
        id="favorite-cocktails"
        className="bg-color-main height100 d-flex align-items-center"
      >
        <Container className="p-3">
          <FavoriteList
            favoriteCocktails={this.getFavoriteCocktails}
            showCoctailInModal={this.showCoctailInModal.bind(this)}
            favCoctailInModal={this.state.favCoctailInModal}
            closeModalHandler={this.closeFavInModal.bind(this)}
            show={this.state.showModal}
            removeFromFavorite={this.removeFromFavorite.bind(this)}
          />
        </Container>
      </section>
    );
  }
}

export default FavoriteCocktailsLoader;
