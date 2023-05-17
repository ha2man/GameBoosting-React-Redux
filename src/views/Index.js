import React from "react";
// reactstrap components
// import {
// } from "reactstrap";

// sections for this page
import IndexHeader from "components/Headers/IndexHeader.js";
import BoostingMenu from './index-sections/BoostingMenu.js';
import BoostingContent from "./index-sections/BoostingContent.js";
import CompletedOrders from "./index-sections/CompletedOrders.js";

function Index({game}) {
  return (
    <>
      <IndexHeader game={game} />
      <BoostingMenu game={game} />
      <BoostingContent game={game} />
      <CompletedOrders mode={game} />
    </>
  );
}

export default Index;
