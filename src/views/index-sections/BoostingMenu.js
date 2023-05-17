import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { setBoost } from 'app/slices/order';
import { robot_boost, legend_boost } from './constants';
function BoostingMenu({game}) {
    const img_url = `./images/${game}_rank/`;
    const { boostType } = useSelector(state => state.order);
    const boosts = (game==="rocket"?robot_boost:legend_boost);
    const dispatch = useDispatch();
    
    const onBoost = (id) => {
        dispatch(setBoost(id));
    }
    return (
        <div className="section-boost">
            <div className='boost-menu d-flex justify-content-center'>
                {
                    boosts.map(item => (
                        <div key={item.id} className={classnames(
                            "boost-item",
                            {
                                "rocket":game==="rocket",
                                "legend":game==="legend",
                                "active":boostType===item.id
                            }
                        )} onClick={() => onBoost(item.id)}><img src={img_url+item.url+".png"} width={120} height={87} alt={item.url} />
                        <p style={{fontFamily:'odibeeSansFont', fontSize:'28px', fontWeight:'400'}}>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BoostingMenu;