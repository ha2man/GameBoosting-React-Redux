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
    const [ limit, setLimit ] = useState(1);
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
        <div className={classnames("section section-order",{
                "bg-order" : mode==="all"
            })}>
                <Container fluid="xl">
                    <div className={classnames("header", {
                        "my-5":mode === "all"
                    })}>
                        Completed{mode==="all"?" & Ongoing":""} Orders
                    </div>
                    { isLoading ? <div style={{marginTop:"calc(10vh)", marginBottom:"calc(10vh)", textAlign:"center"}}><Spinner style={{ color:"#ffffff", width: '6rem', height: '6rem' }} children={false} /></div> :
                            orders &&
                            orders
                                .filter(item => (mode!=="all"?(item.state==="Completed"&&item.game===mode):item))
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
                    <button className="my-btn-black mt-5" onClick={handleView}>
                        View More
                    </button>
                </Container>
        </div>
    )
}

export default CompletedOrders;