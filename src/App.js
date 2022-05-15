import React from "react";
import LoadCocktail from "./LoadCocktail";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <>
        <LoadCocktail />
        <Footer />
      </>
    );
  }
}

export default App;
