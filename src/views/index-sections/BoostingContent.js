import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";

import { createOrder } from "app/slices/order";

function BoostingContent() {
    const [modal, setModal] = useState(false);
    const img_url = "./images/rank/";
    const dispatch = useDispatch();

    const toggle = () => setModal(!modal);
    const onSubmit = () => {
        dispatch(createOrder());
        setModal(false);
    }
    return (
        <div className="boost-content">
            <Container fluid='md'>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={onSubmit}>
                    Do Something
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
            <Row xs="1" sm="1" md="1">
                <Col>
                    <div className="boost-main">
                        <div className="current-rank">
                            <div className="d-flex title">
                                <i className="fas fa-play-circle" style={{padding: "3px 10px 0 0", fontSize: "20px", color:"green"}} aria-hidden="true"></i>
                                <h5>Current Rank</h5>
                                <em style={{color:"red", marginLeft:4, fontSize:"2.5rem"}}>*</em>
                            </div>
                            <div className="d-flex">
                                <img src={img_url+"champion1.png"} alt="current" />
                                <span className="flex-grow-1">
                                    <p>Select your current rank:</p>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="desired-wins">
                            <div className="d-flex title">
                                <i className="fas fa-play-circle" style={{padding: "3px 10px 0 0", fontSize: "20px", color:"green"}} aria-hidden="true"></i>
                                <h5>Desired Rank</h5>
                                <em style={{color:"red", marginLeft:4, fontSize:"2.5rem"}}>*</em>
                            </div>
                            <div className="d-flex">
                                <img src={img_url+"champion1.png"} alt="current" />
                                <span className="flex-grow-1">
                                    <p>Select your current rank:</p>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </span>
                            </div>
                            <div className="d-flex pt-3">
                                <div className="flex-fill pr-3">
                                    <p>Select your platform</p>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="flex-fill">
                                    <p>Select gamemode:</p>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='boost-order'>
                        <div className="boost-buy">
                            <div className="your-order">
                                <div>
                                    <i id="creditcardicon" className="fas fa-shopping-cart" style={{height: 18, width: 8, padding: "20px 0 0 23px", color:"rgb(52, 129, 52)"}} aria-hidden="true"></i>
                                    <span>Your Order</span>
                                </div>
                                
                                <div className="mainCheckout">
                                    <div>
                                        <input type="checkbox" /><label>Play with booster +40% cost</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" /><label>Live stream +20% cost</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" /><label>Priority Order (2x speed) +15% cost</label>
                                    </div>
                                </div>
                                <div className="shield"><i class="fas fa-shield-alt" aria-hidden="true"></i></div>
                            </div>
                            <div className="buy-now">
                                <div className="d-flex">
                                    <div className="flex-fill buy-checkout">
                                        <div class="gubel">
                                            <p><i class="fas fa-check" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;User-friendly dashboard</p>
                                        </div>
                                        <div class="gubel">
                                            <p><i class="fas fa-check" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;100% Refund guarantee</p>
                                        </div>
                                        <div class="gubel">
                                            <p><i class="fas fa-check" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;SSL secured payment</p>
                                        </div>
                                        <div class="gubel">
                                            <p><i class="fas fa-check" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Chat with booster</p>
                                        </div>
                                    </div>
                                    <div className="flex-fill" style={{textAlign:"center"}}>
                                        <div className="price">€34.50</div>
                                        <button className="boost-btn" onClick={toggle}>BOOST NOW</button>
                                    </div>
                                </div>
                                <div className="buy-footer">
                                    Start & reach your desired rank safely!
                                </div>
                            </div>
                        </div>
                        <div className="boost-star">
                            <img src="./images/truepilot.svg" alt="truepilot" />
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default BoostingContent;