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
    const { user: currentUser, isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
            window.location.reload();
        } else if (currentUser.usertype==='booster'){
            navigate('/')
            window.location.reload();
        } else {
            dispatch(getYOrders({limit, id: currentUser.userid}));
        }
    }, [limit])
    
    return (
        <div className="section section-order bg-order" style={{minHeight:"calc(80vh)"}}>
                <Container>
                    <div className="header" style={{fontFamily:'odibeeSansFont', fontSize:'78px', fontWeight:'400', marginBottom:'64px'}}>
                        Your Orders
                    </div>
                    <div className="filter-join" style={{
                        position: 'absolute',
                        background: '#EE9328',
                        left: '-5.31%',
                        top: '-0.6%',
                        width: '310px',
                        height: '310px',
                    }}>
                    </div>
                    <div style={{
                        position:'relative',
                        backgroundColor:'#010518',
                        border:'1px solid #F1AC5C',
                        boxShadow: '0px 0px 10px 1px rgba(241, 172, 92, 0.25)',
                        borderRadius: '8px',
                        zIndex:'50',
                    }}>
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
                                        {/* <Col>
                                            <OrderBlock game={item.game} url="date" title="Date" data={item.date.slice(0, 10)} />
                                        </Col> */}
                                        <Col>
                                            <p className="pt-3"
                                                style={{fontSize:"20px", fontWeight:"600", color: item.state === "Completed" ? "#44cc44" : (item.state === "Waiting" ? "#cc4444" : "#3399ee") }}>
                                                {item.state}
                                            </p>
                                        </Col>
                                    </Row>
                                )
                            }) :
                            <div style={{marginTop:"calc(15vh)", marginBottom:"calc(15vh)", fontWeight:"800", fontSize:"24px", color:'#FFFFFF'}}>
                                <p>No order yet ...</p>
                            </div>
                        )
                    }
                    </div>
                    <div className="filter-join" style={{
                        position: 'absolute',
                        background: '#EE9328',
                        right: '-5.31%',
                        bottom: '-0.6%',
                        width: '310px',
                        height: '310px',
                    }}>
                    </div>
                </Container>
        </div>
    )
}

export default YOrder;