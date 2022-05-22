import React from "react";
import CocktailLoader from "./CocktailLoader";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <>
        <CocktailLoader />
        <Footer />
      </>
    );
  }
}

export default App;
