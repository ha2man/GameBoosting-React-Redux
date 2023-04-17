import React from "react";

function OrderBlock({ game, url, title, data}) {
    return (
        <div className="d-flex order-block">
            <div className="order-image">
                <img src={`./images/${game}_rank/`+url+".png"} alt={url} />
            </div>
            <div style={{paddingLeft:"0.5rem"}}>
                <div className="order-header">{title}</div>
                <div className="order-data">{data}</div>
            </div>
        </div>
    )
}

export default OrderBlock;