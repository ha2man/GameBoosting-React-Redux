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
import Reviews from "./index-sections/Reviews.js";
import FAQ from './index-sections/FAQ.js';
import ContactUs from "./index-sections/ContactUs.js";

function Index() {
  return (
    <>
      <IndexHeader />
      <BoostingMenu />
      <BoostingContent />
      <Advertise />
      <CompletedOrders />
      <Reviews />
      <FAQ />
      <ContactUs />
    </>
  );
}

export default Index;
