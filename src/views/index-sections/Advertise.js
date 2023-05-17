import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col
} from 'reactstrap';
const dataList = [
    {
        id: 0,
        url: 'Group_38362.png',
        title: "SSL encrypted website",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis`
    },
    {
        id: 1,
        url: 'Group_38363.png',
        title: "Members Area",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit."
    },
    {
        id: 2,
        url: 'Group_38364.png',
        title: "Fast & Efficient",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim"
    },
    {
        id: 3,
        url: 'Group_38365.png',
        title: "Live chat with booster",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis",
    }
];
const stateList = [
    {
        id: 0,
        title: 'Clients',
        content: '150+',
    },
    {
        id: 1,
        title: 'Completed Orders',
        content: '400+',
    },
    {
        id: 2,
        title: 'Lorum Ipsum',
        content: '3000+',
    },
    {
        id: 3,
        title: 'Lorum Ipsum',
        content: '6',
    },
];
function Advertise() {
    return (
        <div className="section-reqa">
            <div style={{
                    position: 'absolute',
                    bottom: '-300px',
                    width: '100%',
                    background: '#150D24',
                    paddingTop: '350px',
                    paddingBottom: '100px',
                    textAlign: 'center',
                }}>
                <Container fluid='md'>
                    <Row>
                        {
                            stateList.map(item => (
                                <Col key={'state'+item.id} xs='12' sm='6' md='3'>
                                    <p>{item.title}</p>
                                    <p style={{fontWeight:'600', fontSize:'54px'}}>{item.content}</p>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
            <Container fluid='md'>
                <h3 className="text-center" style={{paddingBottom: '64px', fontFamily: 'odibeeSansFont', fontWeight:'400', fontSize:'78px'}}>Lorum Ipsum</h3>
                <Row>
                    {
                        dataList.map(item => (
                            <Col key={'data'+item.id} xs='12' sm='6' md='3' style={{
                            }}>
                                <div style={{
                                    border:'1px solid #F1AC5C',
                                    borderRadius: '8px',
                                    padding:'30px',
                                    minHeight: '400px',
                                    backgroundColor: '#010518'
                                }}>
                                    <img src={`./${item.url}`} alt='ads-block' />
                                    <p style={{marginTop:'20px', fontWeight:'700', fontSize:'20px'}}>{item.title}</p>
                                    <p style={{marginTop:'32px', fontWeight:'400', fontSize:'16px', color:'#8E95BB'}}>{item.content}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            
        </div>
    )
}

export default Advertise;