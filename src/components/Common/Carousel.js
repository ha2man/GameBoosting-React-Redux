import React from "react";

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

const items = [
  {
    src: "images/background-wallpaper/slide-1.png",
  },
  {
    src: "images/background-wallpaper/slide-2.png",
  },
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Card className="page-carousel" style={{width:'100%', height:'calc(100vh)'}}>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          style={{width:'100%', height:'100%'}}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {items.map((item) => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}
              >
                <div className="slide-show-div" style={{
                  backgroundPosition: 'right',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage:`url(${item.src})`,
                  width: '100%',
                  height: '100%',
                  minWidth: '1000px',
                  filter: 'blue(1rem)',
                }}></div>
                {/* <img src={item.src} alt={item.altText}/> */}
                <CarouselCaption
                  captionText=""
                  captionHeader=""
                />
                
              </CarouselItem>
            );
          })}
          <a
            className="left carousel-control carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              previous();
            }}
            role="button"
          >
            <span className="fa fa-angle-left" style={{fontSize:'50px', }} />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            role="button"
          >
            <span className="fa fa-angle-right" style={{fontSize:'50px', }}  />
            <span className="sr-only">Next</span>
          </a>
        </Carousel>
      </Card>
    </>
  );
}

export default SectionCarousel;
