import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import Carousel from '../components/Common/_Carousel';
import Advertise from './index-sections/Advertise';
import {
    Container,
    Row,
    Col,
} from 'reactstrap'

const clientSayList = [
    {
        id: 0,
        url: 'ryan.jpg',
        name: 'RINI SINGH',
        role: 'CEO and Co-Founder, Mozzaz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis vestibulum quis. Nunc dapibus libero nec lacinia commodo.',
    },
    {
        id: 1,
        url: 'elina.jpg',
        name: 'Elina Win',
        role: 'CEO and Co-Founder, Mozzaz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis vestibulum quis. Nunc dapibus libero nec lacinia commodo.',
    },
    {
        id: 2,
        url: 'you.jpg',
        name: 'Elina Win',
        role: 'CEO and Co-Founder, Mozzaz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis vestibulum quis. Nunc dapibus libero nec lacinia commodo.',
    },
    {
        id: 3,
        url: 'maxim.jpg',
        name: 'Maxim',
        role: 'CEO and Co-Founder, Mozzaz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis vestibulum quis. Nunc dapibus libero nec lacinia commodo.',
    },
];

function Home() {
    const navigate = useNavigate();
    const [ focusClient, setFocusClient ] = useState(0);


    return (
        <div className=''>
            <div
                className="page-header-image"
                style={{
                    position: 'relative',
                    width: "100%",
                    height: "calc(100vh)",
                    backgroundColor: '#010518',
                }}
            >
                <div className="filter-join" style={{
                    position: 'absolute',
                    background: '#EE9328',
                    left: '-5.31%',
                    top: '-0.6%',
                    width: '310px',
                    height: '310px',
                }}>
                </div>
                <img src={require('../assets/img/pngaaa_1.png')} alt='car' width={813} height={365} style={{
                    position: 'absolute',
                    right: '110px',
                    top: '320px',
                }} />
                <img src={require('../assets/img/PngItem_185339_1.png')} alt='girl' width={535} height={595} style={{
                    position: 'absolute',
                    right: '0px',
                    top: '100px',
                }} />
                <div className='filter-first' style={{
                    position: 'absolute',
                    left: '70.25%',
                    top: '58.63%',
                    width: '40%',
                    height: '236px',
                    background: 'linear-gradient(180.98deg, #D43E3E -92.3%, #0A0219 -92.28%, #0A0219 79.48%)',
                }}
                ></div>
                <div style={{
                    position: 'absolute',
                    left: '10%',
                    top: '30%',
                }}>
                    <h1 className='h1-seo'>Welcome to Relatedboost !</h1>
                    <p style={{
                        width: '70%',
                        fontWeight: '500',
                        fontSize: '20px',
                        color: '#8E95BB'
                    }}>we provide de best and cheapest boosting services for Rocket League and League of Legends.</p>
                    
                    <div className='d-flex mt-3' style={{alignItems: 'center'}}>
                        <img src={require('../assets/img/Shape.png')} alt='shape' />
                        <p style={{color: '#FFFFFF', marginLeft:'6px', fontSize:'24px', fontWeight:'700'}}>Trustpilot</p>
                        <p style={{color: '#8E95BB', marginLeft:'8px', fontSize:'16px'}}>4.8 out of 5</p>
                    </div>

                    <button className='btn-orange mt-5' onClick={() => navigate('/rocket-league-boosting')}>Get Started</button>
                </div>
            </div>
            <Advertise />
            <div style={{
                position: 'relative',
                backgroundColor: '#010518',
                paddingTop: '150px',
                paddingBottom: '150px',
                zIndex:50,
            }}>
                <Container fluid='lg'>
                    <Row>
                        <Col style={{position: 'relative', minWidth: '300px'}}>
                            <img src={require('../assets/img/wallpaperflare2.jpg')} alt='wallpaperflare2' width={660} height={580} />
                            <div className='filter-picture' style={{
                                position: 'absolute',
                                top:'480px',
                                left:'-50px',
                                width: '115%',
                                height: '185px',
                                background: 'linear-gradient(178.03deg, #010518 -22.67%, #0A0219 -22.66%, #0A0219 67.04%)',
                            }}></div>
                        </Col>
                        <Col style={{color: '#BABED6', fontSize:'20px', fontWeight:'500'}}>
                            <h2 style={{color: 'white', fontFamily:'odibeeSansFont', fontSize:'78px', fontWeight:'400'}}>
                                Rocket League
                            </h2>
                            <p style={{paddingBottom:'24px', fontSize:'20px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis ve
                            </p>
                            <div style={{alignItems: 'center', marginBottom:'48px'}}>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Rank Boosting</span></div>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Placement matches</span></div>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Seasonal rewards</span></div>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Tournament wins</span></div>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Rank BoostingWin boosting</span></div>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Coaching</span></div>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Play per hour</span></div>
                            </div>
                            <button className='btn-orange' onClick={() => navigate('/rocket-league-boosting')}>Get Started</button>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'137px'}}>
                        <Col style={{color: '#BABED6', fontSize:'20px', fontWeight:'500'}}>
                            <h2 style={{color: 'white', fontFamily:'odibeeSansFont', fontSize:'78px', fontWeight:'400'}}>
                                League of Legends
                            </h2>
                            <p style={{paddingBottom:'24px', fontSize:'20px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis ve
                            </p>
                            <div style={{alignItems: 'center', marginBottom:'48px'}}>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Rank Boosting</span></div>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Win Boosting</span></div>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Duo Boosting</span></div>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Placements</span></div>
                                <div className='mb-2'><img src={require('../assets/img/Star.png')} alt='star' /><span className='pl-3'>Coaching</span></div>
                            </div>
                            <button className='btn-orange' onClick={() => navigate('/rocket-league-boosting')}>Get Started</button>
                        </Col>
                        <Col style={{position: 'relative', minWidth: '300px'}}>
                            <img src={require('../assets/img/wallpaperflare3.jpg')} alt='wallpaperflare2' width={660} height={580} />
                            <div className='filter-picture' style={{
                                position: 'absolute',
                                top:'480px',
                                left:'-50px',
                                width: '115%',
                                height: '185px',
                                background: 'linear-gradient(178.03deg, #010518 -22.67%, #0A0219 -22.66%, #0A0219 67.04%)',
                            }}></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{
                position: 'relative',
                backgroundColor: '#150D24',
                color: '#FFFFFF',
                paddingTop: '100px',
                paddingBottom: '100px',
                zIndex: 50,
            }}>
                <Container>
                    <h2 style={{
                        fontFamily: 'odibeeSansFont',
                        fontSize:'78px',
                        textAlign: 'center',
                        paddingBottom: '62px',
                    }}>What Our Client Says</h2>
                    <div style={{
                        fontFamily: 'urbanistFont',
                        border: '1px solid #F1AC5C',
                        backgroundColor: '#010518',
                        width: '100%',
                        padding: '40px',
                        borderRadius: '8px',
                    }}>
                        <div style={{
                            display: 'flex',
                            marginBottom:'17px',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{
                                display: 'flex',
                            }}>
                                <img src={require('../assets/img/'+clientSayList[focusClient].url)} alt='avatar' width={58} height={58} style={{borderRadius: '50%'}} />
                                <div style={{marginLeft:'14px'}}>
                                    <p style={{fontSize:'18px', fontWeight:'700'}}>{clientSayList[focusClient].name}</p>
                                    <p style={{fontSize:'14px', fontWeight:'400', color:'#BABED6'}}>{clientSayList[focusClient].role}</p>
                                </div>
                            </div>
                            <div style={{
                                float: 'right',
                                display: 'flex',
                            }}>
                                <img src={require('../assets/img/Vector.png')} alt='vector' width={21} height={42} style={{marginRight:'7px'}} />
                                <img src={require('../assets/img/Vector.png')} alt='vector' width={21} height={42} style={{marginRight:'20px'}} />
                            </div>
                        </div>
                        <p style={{
                            fontSize: '22px',
                            fontWeight: '500',
                            color: '#BABED6',
                        }}>
                            {clientSayList[focusClient].description}
                        </p>
                    </div>
                    <div style={{marginTop:'40px', textAlign: 'center'}}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            {
                                clientSayList.map(item => (
                                    <div onClick={() => setFocusClient(item.id)} style={{
                                        backgroundColor:(focusClient===item.id?'#F1AC5C':'#F1AC5C33'),
                                        width: '18px',
                                        height: '7px',
                                        borderRadius: '5000px',
                                        marginLeft: '3px',
                                    }}></div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Home;