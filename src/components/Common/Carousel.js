import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

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
  },
  {
    src: "images/background-wallpaper/slide-2.png",
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
  
  return (
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
                    <span>Slide 1</span>
                </div>
            </div>
          ))
        }
      </Slide>
    </div>
  );
}

export default SectionCarousel;
