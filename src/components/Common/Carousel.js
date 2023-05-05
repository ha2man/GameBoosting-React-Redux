import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useNavigate } from 'react-router-dom';
// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components

const dataList = [
  {
    src: "images/background-wallpaper/slide-1.png",
    url: '/rocket-league-boosting',
  },
  {
    src: "images/background-wallpaper/slide-2.png",
    url: '/league-legend-boosting',
  },
];

const buttonStyle = {
  fontFamily: 'cursive',
  margin: '3rem',
  color: 'white',
  fontSize: '80px',
  width: "30px",
  background: 'none',
  border: '0px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}>{'<'}</button>,
  nextArrow: <button style={{ ...buttonStyle }}>{'>'}</button>
}

function SectionCarousel() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{height:'calc(100vh)'}}>
        <Slide {...properties}>
          {
            dataList.map(item => (
              <div className="each-slide-effect" style={{width:'100%', height:'calc(100vh)'}}>
                  <div style={{
                    height: '100%',
                    width: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${item.src})`
                  }}>
                      <div className="page-header custom-home" style={{height:"100%"}}>
                        <div className="text-center" style={{width:'100%', margin:'auto'}}>
                            <div style={{position:'absolute', width:'100%', marginTop:'100px', zIndex: 100,}}>
                              <h1 className='h1-seo-home' style={{marginTop:'calc(20vh)'}}>
                                  Relatedboost
                              </h1>
                              <p style={{width:'45%', margin:'auto', marginTop:'2rem', fontSize:'22px', opacity:'0.9'}}>
                                Welcome to Relatedboost, here we provide de best and cheapest boosting services for Rocket League and League of Legends.
                              </p>
                              <button onClick={() => navigate(item.url)} className='my-btn-white' style={{margin:'auto', marginTop:'10rem', fontSize:'21px', fontWeight:'500',}}>
                                  Get Start
                              </button>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
            ))
          }
        </Slide>
      </div>
    </>
  );
}

export default SectionCarousel;
