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
import { getOrders } from 'app/slices/order';
function CompletedOrders({mode}) {
    const { isLoading, orders } = useSelector(state => state.order);
    const [ limit, setLimit ] = useState(100000);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getOrders({limit}));
    }, [limit])
    
    
    const handleView = () => {
        if (mode === "all" && orders.length >= limit*4) {
            setLimit(limit+1);
        }
        else {
            navigate("/order");
        }
    }
    return (
        <div className='section section-order' style={{
            position: 'relative',
            color: '#FFFFFF',
            backgroundColor:'#010518',
            zIndex:50,
        }}>
                <Container>
                    <div className="header" style={{marginBottom:'64px', fontSize:'78px', fontFamily:'odibeeSansFont', fontWeight:'400'}}>
                        Completed Orders
                    </div>
                    {
                        mode==='all'&&
                        <div className="filter-join" style={{
                            position: 'absolute',
                            background: '#EE9328',
                            left: '-5.31%',
                            top: '-0.6%',
                            width: '310px',
                            height: '310px',
                        }}>
                        </div>
                    }
                    <div style={{
                        position:'relative',
                        backgroundColor:'#010518',
                        border:'1px solid #F1AC5C',
                        boxShadow: '0px 0px 10px 1px rgba(241, 172, 92, 0.25)',
                        borderRadius: '8px',
                        zIndex:'50',
                    }}>
                    { isLoading ? <div style={{textAlign:'center'}}>
                        <Spinner style={{ margin:'1rem', color:"#ffffff", width: '6rem', height: '6rem' }} children={false} />
                        </div> :
                            orders &&
                            orders
                                .filter(item => (mode!=="all"?(item.state==="Completed"&&item.game===mode):item.state==="Completed"))
                                .slice(0,mode==="all"?(orders.length<limit*4?orders.length:limit*4):4)
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
                                    </Row>
                                )
                            })
                    }
                    </div>
                    <div className="filter-boost" style={{
                        position: 'absolute',
                        background: '#EE9328',
                        right: '-5.31%',
                        bottom: '15.6%',
                        width: '310px',
                        height: '310px',
                        zIndex: 0,
                    }}>
                    </div>
                    {
                        mode!=='all' &&
                        <button className="btn-orange mt-5" onClick={handleView}>
                            See All Orders
                        </button>
                    }
                </Container>
        </div>
    )
}

export default CompletedOrders;