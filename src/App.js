import React from "react";
import CocktailLoader from "./CocktailLoader";
import Footer from "./Footer";
import FavoriteCocktailsLoader from "./FavoriteCocktailsLoader";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CocktailLoader />} />
            <Route path="/favorites" element={<FavoriteCocktailsLoader />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
