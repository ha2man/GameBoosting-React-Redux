import React from 'react'
function BoostingMenu() {
    const img_url = "./images/rank/";
    return (
        <div className="section-boost">
            <div className='boost-menu d-flex justify-content-center'>
                <div className="boost-item"><img src={img_url+"gc2.png"} alt="1" /><p>Rank Boosting</p></div>
                <div className="boost-item"><img src={img_url+"unranked.png"} alt="1" /><p>Placement matches</p></div>
                <div className="boost-item"><img src={img_url+"diamond2.png"} alt="1" /><p>Seasonal rewards</p></div>
                <div className="boost-item"><img src={img_url+"tournamentwin.png"} alt="1" /><p>Tournament wins</p></div>
                <div className="boost-item"><img src={img_url+"champion1.png"} alt="1" /><p>Win boosting</p></div>
                <div className="boost-item"><img src={img_url+"ssl.png"} alt="1" /><p>Coaching</p></div>
                <div className="boost-item"><img src={img_url+"champion2.png"} alt="1" /><p>Play per hour</p></div>
            </div>
        </div>
    )
}

export default BoostingMenu;