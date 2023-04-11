import React, { useState, useEffect } from 'react'
import classnames from 'classnames';
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import OrderBlock from 'components/Common/OrderBlock';

function CompletedOrders(props) {
    const [ count, setCount ] = useState(4);
    return (
        <div className={classnames("section section-order",{
                "bg-order" : props.mode==="all"
            })}>
                <Container fluid="xl">
                    <div className={classnames("header", {
                        "my-5":props.mode === "all"
                    })}>
                        Completed{props.mode==="all"?" & Ongoing":""} Orders
                    </div>
                    <Row xs="1" sm="2" md="4">
                        <Col>
                            <OrderBlock type="rocket-league" title="Game" data="Rocket League" />
                        </Col>
                        <Col>
                            <OrderBlock type="diamond3" title="From" data="Diamond III" />
                        </Col>
                        <Col>
                            <OrderBlock type="champion1" title="To" data="Champion I" />
                        </Col>
                        <Col>
                            <OrderBlock type="date" title="Date" data="22/03/2023" />
                        </Col>
                        
                    </Row>
                    <Row xs="1" sm="2" md="4">
                        <Col>
                            <OrderBlock type="rocket-league" title="Game" data="Rocket League" />
                        </Col>
                        <Col>
                            <OrderBlock type="diamond3" title="From" data="Diamond III" />
                        </Col>
                        <Col>
                            <OrderBlock type="champion1" title="To" data="Champion I" />
                        </Col>
                        <Col>
                            <OrderBlock type="date" title="Date" data="22/03/2023" />
                        </Col>
                    </Row>
                    <Row xs="1" sm="2" md="4">
                        <Col>
                            <OrderBlock type="rocket-league" title="Game" data="Rocket League" />
                        </Col>
                        <Col>
                            <OrderBlock type="diamond3" title="From" data="Diamond III" />
                        </Col>
                        <Col>
                            <OrderBlock type="champion1" title="To" data="Champion I" />
                        </Col>
                        <Col>
                            <OrderBlock type="date" title="Date" data="22/03/2023" />
                        </Col>
                    </Row>
                    <Row xs="1" sm="2" md="4">
                        <Col>
                            <OrderBlock type="rocket-league" title="Game" data="Rocket League" />
                        </Col>
                        <Col>
                            <OrderBlock type="diamond3" title="From" data="Diamond III" />
                        </Col>
                        <Col>
                            <OrderBlock type="champion1" title="To" data="Champion I" />
                        </Col>
                        <Col>
                            <OrderBlock type="date" title="Date" data="22/03/2023" />
                        </Col>
                    </Row>
                    <button className="my-btn-black mt-5">
                        View More
                    </button>
                </Container>
        </div>
    )
}

export default CompletedOrders;