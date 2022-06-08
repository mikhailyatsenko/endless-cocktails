import React from "react";
import { motion, AnimatePresence } from "framer-motion";

class FavoriteCounter extends React.Component {
  render() {
    return (
      <AnimatePresence>
        {this.props.cocktailInFav.length ? (
          <a href="favorites" style={{ fontSize: "0" }}>
            <motion.div
              initial={{ x: 60 }}
              animate={{ x: 0 }}
              exit={{ x: 60 }}
              className="fav-counter"
            >
              <span
                style={{ fontSize: "22px" }}
                className="pointer material-icons-outlined align-middle"
              >
                bookmark
              </span>
              <span style={{ fontSize: "22px" }} className="align-middle">
                {this.props.cocktailInFav.length}
              </span>
            </motion.div>
          </a>
        ) : null}
      </AnimatePresence>
    );
  }
}

export default FavoriteCounter;
