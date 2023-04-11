import React from "react";

function OrderBlock(props) {
    return (
        <div className="d-flex order-block">
            <div className="order-image">
                <img src={"./images/rank/"+props.type+".png"} alt={props.type} />
            </div>
            <div style={{paddingLeft:"0.5rem"}}>
                <div className="order-header">{props.title}</div>
                <div className="order-data">{props.data}</div>
            </div>
        </div>
    )
}

export default OrderBlock;