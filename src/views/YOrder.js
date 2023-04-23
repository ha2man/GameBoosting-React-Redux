import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import {
    Container,
    Row,
    Col,
    Spinner,
} from 'reactstrap'
import OrderBlock from 'components/Common/OrderBlock';
import { getYOrders } from 'app/slices/order';
function YOrder({mode}) {
    const { isLoading, yorders } = useSelector(state => state.order);
    const [ limit, setLimit ] = useState(1);
    const { user: currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getYOrders({limit, id: currentUser.userid}));
    }, [limit])
    
    return (
        <div className="section section-order bg-order" style={{minHeight:"calc(70vh)"}}>
                <Container fluid="xl">
                    <div className="header my-5">
                        Your Orders
                    </div>
                    { isLoading ?
                        <div style={{marginTop:"calc(10vh)", marginBottom:"calc(10vh)", textAlign:"center"}}>
                            <Spinner style={{ color:"#ffffff", width: '6rem', height: '6rem' }} />
                        </div> :
                        (
                            yorders.length ?
                            yorders
                                .map(item => {
                                return (
                                    <Row xs="1" md="2" sm="4">
                                        <Col>
                                            <OrderBlock game={item.game} url={item.game} title="Game" data={item.game==="rocket"?"Rocket League":"League of Legends"} />
                                        </Col>
                                        <Col>
                                            <OrderBlock game={item.game} url={item.current.url} title="From" data={item.current.name} />
                                        </Col>
                                        <Col>
                                            <OrderBlock game={item.game} url={item.desired.url} title="To" data={item.desired.name} />
                                        </Col>
                                        <Col>
                                            <OrderBlock game={item.game} url="date" title="Date" data={item.date.slice(0, 10)} />
                                        </Col>
                                        <Col>
                                            <p className="pt-3"
                                                style={{fontSize:"20px", fontWeight:"600", color: item.state === "Completed" ? "#44cc44" : (item.state === "Waiting" ? "#cc4444" : "#3399ee") }}>
                                                {item.state}
                                            </p>
                                        </Col>
                                    </Row>
                                )
                            }) :
                            <div style={{marginTop:"calc(15vh)", marginBottom:"calc(10vh)", fontWeight:"800", fontSize:"24px", color:'#272727'}}>
                                <p>You have no order yet ...</p>
                            </div>
                        )
                    }
                </Container>
        </div>
    )
}

export default YOrder;