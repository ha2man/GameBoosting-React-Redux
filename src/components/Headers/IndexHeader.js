/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

const headerNames = [
  {
    url: "/rocket-league-boosting",
    name: "Rocket League boosting",
    img: "/images/background-wallpaper/1.jpg",
  },
  {
    url: "/league-legend-boosting",
    name: "League of Legend boosting",
    img: "/images/background-wallpaper/2.jpg",
  },
];
function IndexHeader() {
  let pageHeader = React.createRef();
  const currentId = headerNames.findIndex(item => item.url==window.location.pathname);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      // const updateScroll = () => {
      //   let windowScrollTop = window.pageYOffset / 3;
      //   pageHeader.current.style.transform =
      //     "translate3d(0," + windowScrollTop + "px,0)";
      // };
      // window.addEventListener("scroll", updateScroll);
      // return function cleanup() {
      //   window.removeEventListener("scroll", updateScroll);
      // };
    }
  });

  return (
    <>
    <div
          className="page-header-image"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${headerNames[currentId].img})`,
          }}
          ref={pageHeader}
        >
      <div id="canvas-pl" className="page-header clear-filter custom" filter-color="black">
        
        <div className="content-center brand custom">
            <h1 className="h1-seo">
              {headerNames[currentId].name}
            </h1>
            <p>Select from Rank boosting and 7+ services.</p>
          </div>
        <canvas id="canvas" width="1242" height="400" style={{width: '100%', height: '100%'}}></canvas>
      </div>
      </div>
    </>
  );
}

export default IndexHeader;
