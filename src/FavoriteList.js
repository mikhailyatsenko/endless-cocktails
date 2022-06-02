import React from "react";

class FavoriteList extends React.Component {
  render() {
    return (
      <>
        <h1>Favorite cocktails:</h1>
        <ul>
          {this.props.favoriteCocktails().map((coctail) => (
            <li key={coctail.name}>{coctail.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default FavoriteList;
