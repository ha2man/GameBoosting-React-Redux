/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row xs="1" sm="2" md="3">
          <Col className="footer-block">
            <img src="./images/logo.png" alt="logo" className="custom-logo"/>
            <h5>League of Legends</h5>
            <div style={{textAlign:"left"}}>
              Phrixboosting is a game boosting service with the world's highest rate of customer-satifaction. We are not endorsed by any of the showed trademarks at our website and we do not reflect any views or opinions of these registered trademarks.
            </div>
          </Col>
          <Col className="footer-block d-flex">
            <div className="flex-fill">
              <p>SERVICES</p>
              <ul className="custom">
                <li><a href="#">Rocket League Boosting</a></li>
                <li><a href="#">Apex Legends</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Review</a></li>
              </ul>
            </div>
            <div className="flex-fill">
              <p>INFORMATION</p>
              <ul className="custom">
                <li><a href="#">Discord</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </Col>
          <Col className="footer-block mt-4">
            <p>Payment methods</p>
            <img src="./images/paypal.png" alt="paypal" width="50%" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;
