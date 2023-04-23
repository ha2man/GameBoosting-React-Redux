import React from "react";
// reactstrap components
// import {
// } from "reactstrap";

// sections for this page
import IndexHeader from "components/Headers/IndexHeader.js";
import BoostingMenu from './index-sections/BoostingMenu.js';
import BoostingContent from "./index-sections/BoostingContent.js";
import Advertise from "./index-sections/Advertise.js";
import CompletedOrders from "./index-sections/CompletedOrders.js";
import FAQ from './index-sections/FAQ.js';
import ContactUs from "./index-sections/ContactUs.js";

function Index({game}) {
  return (
    <>
      <IndexHeader game={game} />
      <BoostingMenu game={game} />
      <BoostingContent game={game} />
      <Advertise game={game} />
      <CompletedOrders mode={game} />
      <FAQ game={game} />
      {/* <ContactUs /> */}
    </>
  );
}

export default Index;
