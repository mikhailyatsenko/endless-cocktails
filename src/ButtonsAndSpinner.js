import React from "react";
import { Button } from "react-bootstrap";

class ButtonsAndSpinner extends React.Component {
  buttonRef = React.createRef();
  componentDidUpdate() {
    this.buttonRef.current.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="text-center">
        <div className={this.props.defaultShow + "text-center pt-3"}>
          <h1 className="pb-3">Press button to generate cocktail</h1>
        </div>

        <div className={this.props.isLoading ? "" : "hide"}>
          <div className="d-block mx-auto spinner-border" role="status"></div>
          <p className="text-center">Loading cocktail...</p>
        </div>

        <Button
          ref={this.buttonRef}
          variant="dark"
          className={
            this.props.isLoading
              ? "disabled load-cocktail btn-lg"
              : "load-cocktail btn-lg"
          }
        >
          Generate cocktail!
        </Button>
      </div>
    );
  }
}

export default ButtonsAndSpinner;
