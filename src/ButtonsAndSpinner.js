import React from "react";
import { Button } from "react-bootstrap";

class ButtonsAndSpinner extends React.Component {
  scrollRef = React.createRef();
  componentDidUpdate() {
    this.scrollRef.current.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="text-center">
        {this.props.cocktailData.length ? null : (
          <div className="text-center pt-3">
            <h1 className="pb-3">Press button to generate cocktail</h1>
          </div>
        )}

        {this.props.isLoading ? (
          <div ref={this.scrollRef}>
            <div className="d-block mx-auto spinner-border" role="status"></div>
            <p className="text-center">Loading cocktail...</p>
          </div>
        ) : (
          <Button
            ref={this.scrollRef}
            onClick={this.props.clickHandler}
            variant="dark"
            className="btn-lg"
          >
            Generate cocktail!
          </Button>
        )}
      </div>
    );
  }
}

export default ButtonsAndSpinner;
