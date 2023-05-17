/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black" style={{position:'relative', fontFamily:'urbanistFont', paddingTop:'50px'}}>
      <Container fluid='md'>
        <Row xs="1" sm="2" md="3">
          <Col xs={{ size: 5, order: 1, offset: 0 }} className="footer-block text-left">
            <div className="flex-fill d-flex mt-4">
              <img src="./images/logo.png" alt="logo" className="custom-logo"/>
              <p className="mt-2 ml-2 mb-3">Related Boost</p>
            </div>
            <div style={{fontSize:'16px', fontWeight:'400', color: '#8E95BB', textAlign:'justify'}}>
              We want to make it clear that we are not affiliated with or endorsed by any of the trademarks displayed on our website. Our mission is to provide reliable and effective boosting services, and we take pride in our ability to deliver exceptional results for our clients.
            </div>
          </Col>
          <Col xs={{ size: 3, order: 2, offset: 0.5 }} className="footer-block d-flex">
            <div className="flex-fill text-left">
              <p className="mb-3">SERVICES</p>
              <ul className="custom">
                <li><a href="/rocket-league-boosting">Rocket League</a></li>
                <li><a href="/league-legend-boosting">League of Legends</a></li>
                <li><a href="/order">Orders</a></li>
              </ul>
            </div>
            
          </Col>
          <Col xs={{ size: 3, order: 3, offset: 0 }} className="footer-block d-flex">
            <div className="flex-fill text-left">
                <p className="mb-3">INFORMATION</p>
                <ul className="custom">
                  <li><a href="https://discord.com/invite/mt7Q6ENp" target="_blank">Discord</a></li>
                  <li><a href="/terms">Terms of use</a></li>
                  <li><a href="/login">Login</a></li>
                </ul>
            </div>
          </Col>
          {/* <Col className="footer-block mt-5">
            <p>Payment methods</p>
            <img src="./images/paypal.png" alt="paypal" width="50%" />
          </Col> */}
        </Row>
        <div style={{borderTop: '1px solid #F1AC5C', paddingTop: '16px', marginTop: '50px'}}>
            © 2023 Lift Media. All rights reserved. 
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
