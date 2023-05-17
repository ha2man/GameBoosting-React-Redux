/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

const headerNames = [
  {
    url: "/rocket-league-boosting",
    name: "Rocket League boosting",
    img: "/images/background-wallpaper/wallpaperflare-rocket.jpg",
  },
  {
    url: "/league-legend-boosting",
    name: "League of Legend boosting",
    img: "/images/background-wallpaper/wallpaperflare-legend.jpg",
  },
];
function IndexHeader({game}) {
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
            backgroundPosition: (game=="rocket"?"left":""),
            backgroundSize: "cover",
            backgroundImage: `url(${headerNames[currentId].img})`,
          }}
          ref={pageHeader}
        >
        <div id="canvas-pl" className="page-header clear-filter custom" style={{height:'509px'}} filter-color="black">
          {/* <canvas id="canvas" width="1242" height="509" style={{width: '100%', height: '100%'}}></canvas> */}
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
