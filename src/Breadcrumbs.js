import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active href="favorites">
            Favorites coctails
          </Breadcrumb.Item>
        </Breadcrumb>
      </>
    );
  }
}

export default Breadcrumbs;
