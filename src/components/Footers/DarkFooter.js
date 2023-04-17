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
            <h5 className="mt-1">RelatedBoost</h5>
            <div style={{textAlign:"justify"}}>
              We want to make it clear that we are not affiliated with or endorsed by any of the trademarks displayed on our website. Our mission is to provide reliable and effective boosting services, and we take pride in our ability to deliver exceptional results for our clients.
            </div>
          </Col>
          <Col className="footer-block d-flex">
            <div className="flex-fill">
              <p>SERVICES</p>
              <ul className="custom">
                <li><a href="/rocket-league-boosting">Rocket League</a></li>
                <li><a href="/league-legend-boosting">League of Legends</a></li>
                <li><a href="/order">Orders</a></li>
              </ul>
            </div>
            <div className="flex-fill">
              <p>INFORMATION</p>
              <ul className="custom">
                <li><a href="#">Discord</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="/login">Login</a></li>
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
