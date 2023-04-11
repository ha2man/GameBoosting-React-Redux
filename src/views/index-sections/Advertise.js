import React, { useState, useEffect } from "react";
import {
    Row,
    Col
} from 'reactstrap';
const data = [
    {
        id: 0,
        title: "General",
        content: `Are you tired of being stuck in a lower ranking in Rocket League? Are you looking to improve your skills and climb the ranks? Look no further! Our rocket league boosting service is here to help you reach your goals. \n\n Our team of experienced boosters are some of the best in the industry, with a proven track record of helping players boost their rank and improve their skills. We offer a variety of boosting options, from placement matches to rank boosts to coaching sessions with our top boosters.`
    },
    {
        id: 1,
        title: "Safety",
        content: "But it's not just about the boost - we also prioritize the safety of our clients. Our boosters use safe boosting methods to ensure that your account is not at risk of being banned or suspended. So why wait? Take the first step towards improving your Rocket League skills and sign up for our boosting service today. Our team is standing by, ready to help you reach your goals and become a top-ranked player."
    },
    {
        id: 2,
        title: "Trackboost",
        content: "After you log in you will be automatically redirected to your personal dashboard where you will see your order details as well as a live chat with your booster. There you will also find further instructions on what to do next. As the boost starts, your booster will send you screenshots of how far he got through discord, or just update you through the live chat in your dashboard. If you feel unsure contact us through the live chat support at the bottom right corner of this page or join our discord server Phrixboosting Discord"
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