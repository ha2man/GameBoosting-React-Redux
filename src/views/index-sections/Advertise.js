import React, { useState, useEffect } from "react";
import {
    Row,
    Col
} from 'reactstrap';
const data = [
    {
        id: 0,
        title: "General",
        content: `Welcome to our website! We are dedicated to helping Rocket League and League of Legends players reach their desired ranks with ease. Our team of experienced players offers reliable and affordable boosting services, ensuring that you get the rank you want without the hassle. Don't waste any more time struggling to climb the ranks - let us help you achieve your goals and dominate the competition.`
    },
    {
        id: 1,
        title: "Safety",
        content: "At our website, we understand the importance of providing not only efficient, but also secure services for our clients. That's why we take great care in ensuring that our boosters use only safe and reliable methods, guaranteeing the protection of your account from any potential risks such as bans or suspensions. Don't hesitate any longer, start your journey towards improving your League of Legends performance now and let our skilled team guide you towards success."
    },
    {
        id: 2,
        title: "Trackboost",
        content: "You'll be able to engage in chat with your booster, ensuring that you stay in the loop throughout the entire process. You'll also find detailed instructions on what to do next as the boosting process begins. Your booster will keep you updated on their progress through Discord. If at any point you feel uncertain or have any questions, don't hesitate to reach out to us through our Discord server."
    }
]
function Advertise() {
    const [ focusItem, setFocusItem ] = useState(0);
    return (
        <div className="section-reqa">
            <div className="boost-end"></div>
            <div className="container reqa">
                <div>
                    {
                        data.map((item) => (
                            <span key={item.id} onClick={() => setFocusItem(item.id)}>{item.title}</span>
                        ))
                    }
                </div>
                <hr style={{width: "60%", margin:"2rem 0", border: "none", height: "2px", backgroundColor: "rgb(96,96,96)"}}></hr>
                <div className="reqa-content">
                    <p>{data[focusItem].content}</p>
                </div>
                <Row>
                    <Col className="reqa-block">
                        <i className="fas fa-lock" aria-hidden="true"></i>
                        <div>SSL encrypted website</div>
                    </Col>
                    <Col className="reqa-block">
                        <i className="fas fa-users" aria-hidden="true"></i>
                        <div>Members Area</div>
                    </Col>
                    <Col className="reqa-block">
                        <i className="fas fa-shipping-fast" aria-hidden="true"></i>
                        <div>Fast & Efficient</div>
                    </Col>
                    <Col className="reqa-block">
                        <i className="fas fa-comments" aria-hidden="true"></i>
                        <div>Live chat with booster</div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Advertise;