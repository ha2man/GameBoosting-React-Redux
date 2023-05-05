import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PayPalScriptProvider} from "@paypal/react-paypal-js";
import {
    Container,
    Row,
    Col,
    Button,
    Badge,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import { createOrder } from "app/slices/order";
import { robot_boost, legend_boost,
        rocket_rank, legend_rank,
        rocket_price, legend_price,
        robot_boost_label, legend_boost_label,
        platformList, gamemodeList, serverList, hours } from "./constants";
import ButtonWrapper from "components/Common/PayPalBtn";

const clientID = "AbYSppYYoZ7GJx4R2VMituc3pvMTNvFvJvnxRIRdbHLZEeNrEnzI3sf5I_wRnruSY87_DkQMBWrxt4ON";
function BoostingContent({game}) {
    const [modal, setModal] = useState(false);
    const [guserdata, setGUserdata] = useState("");
    const [gpassword, setGPassword] = useState("");
    const [eye, setEye] = useState(false);
    const [platform, setPlatform] = useState(1);
    const [gamemode, setGamemode] = useState(1);
    const [server, setServer] = useState(1);
    const [current, setCurrent] = useState(0);
    const [desired, setDesired] = useState(0);
    const [price, setPrice] = useState({total:0, plus:0, discount:0});
    const [orderOption, setorderOption] = useState({
        play:false, live:false, priority:false,
        offline:false, character:false, stream:false,primium:false,high:false,game:false,
    });
    const { user: currentUser } = useSelector((state) => state.auth);
    const { boostType } = useSelector(state => state.order);
    const img_url = `./images/${game}_rank/`;
    const boostLabel = (game==="rocket"?robot_boost_label:legend_boost_label);
    const basicColor = (game==="rocket"?"rgba(210, 66, 66, 0.9)":"rgba(158, 13, 231,0.9)");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    
    let current_list = [];
    let desired_list = [];

    const checkPrice = () => {
        if (current_list.length <= current || desired_list.length <= desired)
            return;
        let price_t = 0;
        let plus_t = 0;
        let discount_t = 0;
        if (game==="rocket") {
            switch (boostType) {
                case 1:
                    for (let i = current; i <= desired; i ++) price_t += rocket_price.rank[i];
                    break;
                case 2:
                    price_t = rocket_price.placement[current] * (desired+1);
                    break;
                case 3:
                    price_t = rocket_price.season[current] * (desired+1);
                    break;
                case 4:
                    price_t = rocket_price.tournament[current] * (desired+1);
                    break;
                case 5:
                    price_t = rocket_price.win[current] * (desired+1);
                    break;
                case 6:
                    price_t = rocket_price.coach[current] * (desired+1);
                    break;
                case 7:
                    price_t = rocket_price.play[current] * (desired+1);
                    break;
                default:
                    break;
            }
            if (boostType > 5) {
                if (desired === 1) discount_t = 0.05;
                else if (desired > 1) discount_t = 0.1;
            }
            if (boostType !== 4 && boostType !== 6) {
                plus_t += gamemodeList.find(item => item.value == gamemode).plus;
            }
            plus_t += orderOption.play?0.4:0;
            plus_t += orderOption.live?0.2:0;
            plus_t += orderOption.priority?0.15:0;
        }
        else {
            switch (boostType) {
                case 1:
                    for (let i = current; i <= desired; i ++) price_t += legend_price.rank[i];
                    break;
                case 2:
                    price_t = legend_price.win[current] * (desired+1);
                    break;
                case 3:
                    for (let i = current; i <= desired; i ++) price_t += legend_price.duo[i];
                    break;
                case 4:
                    price_t = legend_price.placements[current] * (desired+1);
                    break;
                case 5:
                    price_t = legend_price.coach * (desired+1);
                    if (desired === 1) discount_t = 0.05;
                    else if (desired > 1) discount_t = 0.1;
                    break;
                default:
                    break;
            }
            plus_t += orderOption.play?0.35:0;
            plus_t += orderOption.game?-0.3:0;
            plus_t += orderOption.premium?0.3:0;
            plus_t += orderOption.offline?0:0;
            plus_t += orderOption.character?0:0;
            plus_t += orderOption.priority?0.2:0;
            plus_t += orderOption.stream?0.2:0;
            plus_t += orderOption.high?0.2:0;
        }
        price_t *= (1-discount_t);
        price_t *= (1+plus_t);
        price_t = price_t.toFixed(2);
        plus_t = plus_t.toFixed(2);
        discount_t = discount_t.toFixed(2);
        setPrice({total:price_t, plus:plus_t, discount:discount_t});
    }
    const loadList = () => {
        current_list = [];
        desired_list = [];
        // Load Current List
        if (game==="rocket") {
            if (boostType > 1 && boostType < 5) {
                if (boostType === 2)
                    current_list.push({url: "unranked", value:"unranked", name:"Unranked"});
                rocket_rank.forEach(item => {
                    current_list.push({url: item.value+(item.value==="ssl"?"":"2"), value:item.value, name:item.name+(boostType===4?" Tournament":"")});
                })
            }
            else {
                rocket_rank.forEach(item => {
                    for(let i = 1; i <= item.level; i ++) {
                        let out_item = item.name+" ";
                        let out_value = item.value + (item.level>1?i.toString():"");
                        if (item.level !== 1)
                            for (let j = 0; j < i; j ++)
                                out_item += 'I'
                        
                        current_list.push({url: out_value, value:out_value, name:out_item})
                        if (boostType !== 7 && item.value === "ssl")
                            current_list.pop();
                    }
                })
            }
        }
        else if (game === "legend") {
            if (boostType === 4)
                current_list.push({url: "unranked", value:"unranked", name:"Unranked"})
            legend_rank.forEach(item => {
                for(let i = item.level; i >= 1; i --) {
                    let out_item = item.name+" ";
                    let out_value = item.value+i.toString();
                    if (i === 4)
                        out_item += "IV"
                    else
                        for (let j = 0; j < i; j ++)
                            out_item += 'I'
                    current_list.push({url: item.value, value:out_value, name:out_item})
                }
            })
            if (boostType !== 1 && boostType !== 3)
                current_list.push({url:"master", value:"master", name:"Master"});
        }
        // Load Desired List
        if (game === "rocket") {
            if (boostType === 1) {
                rocket_rank.forEach(item => {
                    for(let i = 1; i <= item.level; i ++) {
                        let out_item = item.name+" ";
                        let out_value = item.value + (item.level>1?i.toString():"");
                        if (item.level !== 1)
                            for (let j = 0; j < i; j ++)
                                out_item += 'I'
                        
                        desired_list.push({url: out_value, value:out_value, name:out_item})
                        if (boostType === 1 && out_value==="bronze1")
                            desired_list.pop();
                    }
                })
            }
            if (boostType >=2 && boostType <= 5) {
                if (boostType !== 4)
                    for (let i = 1; i <= 10; i ++) {
                        desired_list.push({url: "unranked", value:i.toString(), name:i.toString()+" "+(boostType===4?"Games":"Wins")});
                }
                else {
                    desired_list.push({url: "unranked", value:"1", name:"1 Wins"});
                    desired_list.push({url: "unranked", value:"2", name:"2 Wins"});
                    desired_list.push({url: "unranked", value:"3", name:"3 Wins (10% OFF)"});
                }
            }
            if (boostType > 5) {
                hours.forEach(item => {
                    desired_list.push({url: "time", value:item.value.toString(), name:item.name});
                })
            }
        }
        if (game === "legend") {
            switch (boostType) {
                case 2:
                    for (let i = 1; i <= 7; i ++) {
                        desired_list.push({url: "bronze", value:i.toString(), name:i.toString()+" Wins"})
                    }
                    break;
                case 4:
                    for (let i = 1; i <= 10; i ++) {
                        desired_list.push({url: "bronze", value:i.toString(), name:i.toString()+" Matches"})
                    }
                    break;
                case 5:
                    hours.forEach(item => {
                        desired_list.push({url: "time", value:item.value.toString(), name:item.name});
                    })
                    break;
                default:
                    legend_rank.forEach(item => {
                        for(let i = item.level; i >= 1; i --) {
                            let out_item = item.name+" ";
                            let out_value = item.value+i.toString();
                            if (i === 4)
                                out_item += "IV"
                            else
                                for (let j = 0; j < i; j ++)
                                    out_item += 'I'
                            desired_list.push({url: item.value, value:out_value, name:out_item})
                            if (out_value === "iron4")
                                desired_list.pop();
                        }
                    })
                    desired_list.push({url:"master", value:"master", name:"Master"});
                    break;
            }
        }
    }
    loadList();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        loadList();
        setCurrent(0);
        setDesired(0);
        setGUserdata("");
        setGPassword("");
        setorderOption({play:false, live:false, priority:false,
            offline:false, character:false, stream:false,primium:false,high:false,game:false});
        checkPrice();
    }, [boostType]);

    useEffect(() => {
        checkPrice();
    }, [current, desired, gamemode, orderOption]);
    
    const checkRank = () => {
        if ((game === "rocket" && boostType === 1) || (game === "legend" && (boostType === 1 || boostType === 3)))
            return true;
        return false;
    }
    const onCurrent = (e) => {
        const current = current_list.findIndex(item => item.value === e.target.value);
        if (checkRank() && current>=desired) setDesired(current);
        setCurrent(current);
    }
    const onDesired = (e) => {
        const desired = desired_list.findIndex(item => item.value === e.target.value);
        if (checkRank() && current>=desired) setCurrent(desired);
        setDesired(desired);
    }
    const onSubmit = () => {
        if (currentUser) {
            const mainOption = {
                platform:(game==="rocket")?platformList[platform-1].name:null,
                gamemode:(game==="rocket")?(boostType!==6?gamemodeList[gamemode-1].name:gamemodeList[gamemode-1].name2):null,
                server:(game==="legend")?serverList[server-1].name:null,
            }
            const desired_url = (game==="rocket"&&boostType>2&&boostType<6 || game=="legend"&&(boostType%2===0))
                        ?
                        current_list[current].url
                        :
                        desired_list[desired].url;
            const boost = (game==="rocket"?robot_boost[boostType-1]:legend_boost[boostType-1]);
            const data = {
                email: currentUser.email,
                game: game,
                boostType: {url:boost.url, name:boost.name},
                current:{url: current_list[current].url, name: current_list[current].name},
                desired:{
                    url:  desired_url,
                    name: desired_list[desired].name
                },
                price:price.total,
                account: {
                    userdata: guserdata,
                    password: gpassword,
                },
                mainOption: mainOption,
                orderOption: orderOption,
            };
            dispatch(createOrder(data));
        } else {
            navigate('/login');
        }
        setModal(!modal);
    }
    const toggle = () => setModal(!modal);
    const onBoost = () => {
        if (!currentUser) {
            navigate('/login');
        } else {
            setModal(!modal);
        }
    }
    return (
        <div className="boost-content">
            <Container fluid='md'>
            <Modal isOpen={modal} toggle={toggle} size="lg" centered>
                <ModalHeader toggle={toggle} style={{padding:"2rem", backgroundColor:"#202020"}}>
                    <i className="fas fa-tag" style={{color:basicColor}} aria-hidden="true"></i>
                    Checkout
                </ModalHeader>
                <div className="p-4 text-right" style={{fontSize:"22px", marginRight:"5%"}}>
                    From{" "}
                    <span style={{padding:"0 0.2rem",fontSize:"22px", fontWeight:"600", color:"#ebb434"}}>{current>=current_list.length?"":current_list[current].name}</span>
                    {" "}to{" "}
                    <span style={{padding:"0 0.2rem",fontSize:"22px", fontWeight:"600", color:"#ebb434"}}>{desired>=desired_list.length?"":desired_list[desired].name}</span>
                </div>
                <ModalBody style={{padding:"2rem 4rem 0rem 4rem", backgroundColor:"#252525"}}>
                    {
                        !orderOption.play ?
                        <div>
                            <div className="mb-2">
                                <i className="fas fa-shopping-cart" style={{color:basicColor}}></i>
                                <h3 style={{display:"inline"}}>Game Account Details</h3>
                            </div>
                            <Row>
                                <Col>
                                    <p>Username{game==="rocket"?" / Email":""}</p>
                                    <input type="text" value={guserdata} onChange={(e) => setGUserdata(e.target.value)} placeholder="userdata..." />
                                </Col>
                                <Col>
                                    <div className="d-flex">
                                        <p>Password</p>
                                        <span onClick={(e) => setEye(!eye)} className="password-eye"><i className="fas fa-eye pl-2" style={{opacity:eye?"1":"0.2", fontSize:"1rem", paddingTop:"0.9rem"}}></i></span>
                                    </div>
                                    <input type={eye?"text":"password"} value={gpassword} onChange={(e) => setGPassword(e.target.value)} placeholder="password..." />
                                </Col>
                            </Row>
                        </div> : 
                        <div></div>
                    }
                    <div className="pt-4">
                        <i className="fas fa-wallet" style={{color:basicColor}}></i>
                        <h3 style={{display:"inline"}}>Payment</h3>
                    </div>
                </ModalBody>
                <ModalFooter style={{padding:"2rem 4rem", backgroundColor:"#252525"}}>
                    <PayPalScriptProvider options={{
                        "client-id": clientID,
                        components: "buttons",
                        currency: "EUR"
                    }}>
                    <div className="d-flex text-center" style={{width:"100%"}}>
                        <div className="flex-fill" style={{fontSize:"28px",fontWeight:"600"}}>
                            Price:{" "}
                            <span style={{fontSize:"30px", color:"#ebb434"}}>€{price.total}</span>
                        </div>
                        <div className="flex-fill">
                            {/* <Button onClick={onSubmit} className="paypal-btn mb-3">
                                <span style={{color:"rgba(54, 95, 219)"}}>Pay</span><span style={{color:"rgba(54, 135, 219)"}}>Pal</span>
                            </Button> */}
                            <span style={{color:"#a4a4a4"}}>
                            {(!orderOption.play && (guserdata==="" || gpassword==="")) ?
                            "Please enter your game account detail" :
                            "Please don't close the paypal browser when it is loading"
                            }
                            </span>
                            <ButtonWrapper
                                disablity={(!orderOption.play && (guserdata==="" || gpassword===""))}
                                amount={price.total}
                                currency={"EUR"}
                                showSpinner={false}
                                onSubmit={onSubmit}
                            />
                        </div>
                    </div>
                    </PayPalScriptProvider>
                </ModalFooter>
            </Modal>
            <Row xs="1" sm="1" md="1">
                <Col>
                    <div className="boost-main">
                        <div className="current-rank">
                            <div className="d-flex title">
                                <i className="fas fa-play-circle" style={{color:basicColor}} aria-hidden="true"></i>
                                <h5>{boostLabel[boostType].cheader}</h5>
                                <em style={{color:"red", marginLeft:4, fontSize:"2.5rem"}}>*</em>
                            </div>
                            <div className="d-flex">
                                <img src={img_url+current_list[current>=current_list.length?0:current].url+".png"} alt="current" />
                                <span className="flex-grow-1">
                                    <p>{boostLabel[boostType].csub}:</p>
                                    <select onChange={onCurrent} value={current_list[current>=current_list.length?0:current].value}>
                                        {
                                            current_list.map(item => (
                                                <option key={"current"+item.value} value={item.value}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="desired-wins mt-3">
                            <div className="d-flex title">
                                <i className="fas fa-crosshairs" style={{color:basicColor}} aria-hidden="true"></i>
                                <h5>{boostLabel[boostType].dheader}</h5>
                                <em style={{color:"red", marginLeft:4, fontSize:"2.5rem"}}>*</em>
                            </div>
                            <div className="d-flex">
                                {
                                    game==="rocket"?(
                                        boostType>2&&boostType<6
                                        ?
                                        <img src={img_url+current_list[current>=current_list.length?0:current].url+".png"} alt="desired" />
                                        :
                                        <img src={img_url+desired_list[desired>=desired_list.length?0:desired].url+".png"} alt="desired" />
                                    )
                                    :(
                                        boostType%2===0
                                        ?
                                        <img src={img_url+current_list[current>=current_list.length?0:current].url+".png"} alt="desired" />
                                        :
                                        <img src={img_url+desired_list[desired>=desired_list.length?0:desired].url+".png"} alt="desired" />
                                    )

                                }
                                <span className="flex-grow-1">
                                    <p>{boostLabel[boostType].dsub}:</p>
                                        <select onChange={onDesired} value={desired_list[desired>=desired_list.length?0:desired].value}>
                                        {
                                            desired_list.map(item => (
                                                <option key={"desired"+item.value} value={item.value}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </span>
                            </div>
                            {
                                game === "legend" ?
                                <div className="d-flex pt-3">
                                    <div className="flex-fill pr-3">
                                        <p>Select your server:</p>
                                        <select value={server} onChange={(e) => setServer(e.target.value)}>
                                            {
                                                serverList.map(item => (
                                                    <option key={"server"+item.value} value={item.value}>{item.name}</option>
                                                ))
                                            }:
                                            <div></div>
                                        </select>
                                    </div>
                                </div> :
                                <div className="d-flex pt-3">
                                    <div className="flex-fill pr-3">
                                        <p>Select your platform:</p>
                                        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                                            {
                                                platformList.map(item => (
                                                    <option key={"platform"+item.value} value={item.value}>{item.name}</option>
                                                ))
                                            }:
                                            <div></div>
                                        </select>
                                    </div>
                                    {
                                        boostType!==4 ?
                                        <div className="flex-fill">
                                            <p>Select gamemode:</p>
                                            <select value={gamemode} onChange={(e) => setGamemode(e.target.value)}>
                                                {/* <option disabled value="default" style={{display: "none"}}>Select gamemode</option> */}
                                                {
                                                    gamemodeList.map(item => (
                                                        <option key={"gamemode"+item.value} value={item.value}>{boostType!==6?item.name:item.name2}</option>
                                                    ))
                                                }
                                            </select>
                                        </div> : <div></div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='boost-order'>
                        <div className="boost-buy" style={{borderColor:basicColor}}>
                            <div className="your-order">
                                <div>
                                    <i id="creditcardicon" style={{color:basicColor}} className="fas fa-shopping-cart" aria-hidden="true"></i>
                                    <span style={{fontSize:"27px", fontWeight:"600", padding:"20px 0 0 50px", color:"#ebb434"}}>Your Order</span>
                                </div>
                                
                                {
                                    game === "rocket" ?
                                    <div className="mainCheckout">
                                        {
                                            boostType < 6 ?
                                                <div>
                                                    <div className="check-div">
                                                        <input type="checkbox" checked={orderOption.play} onClick={() => {setorderOption({...orderOption, play:!orderOption.play, live:(!orderOption.play?false:orderOption.live)})}} /><span>Play with booster<Badge className="order-badge cost" pill>+40%</Badge></span>
                                                    </div>
                                                    <div className="check-div">
                                                        <input type="checkbox" checked={orderOption.live} onClick={() => {setorderOption({...orderOption, live:!orderOption.live, play:(!orderOption.live?false:orderOption.play)})}} /><span>Live stream<Badge className="order-badge cost" pill>+20%</Badge></span>
                                                    </div>
                                                    <div className="check-div">
                                                        <input type="checkbox" checked={orderOption.priority} onClick={() => {setorderOption({...orderOption, priority:!orderOption.priority})}} /><span>Priority Order <Badge className="order-badge free" pill>2x Speed</Badge><Badge className="order-badge cost" pill>+15%</Badge></span>
                                                    </div>
                                                </div> :
                                            <div>
                                                <p style={{color:"#373737", fontWeight:"600"}}>No Extra Options</p>
                                            </div>
                                        }
                                    </div> :
                                    <div className="mainCheckout">
                                        {
                                            boostType === 5 ?
                                            <div>
                                                <p style={{color:"#373737", fontWeight:"600"}}>No Extra Options</p>
                                            </div> :
                                            <div>
                                            {
                                                boostType%2 === 0 && !orderOption.stream && !orderOption.offline && !orderOption.character &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.play} onClick={() => setorderOption({...orderOption, play:!orderOption.play})} /><span>Play with Booster<Badge className="order-badge cost" pill>+35%</Badge></span>
                                                </div>
                                            }
                                            {
                                                boostType%2 === 0 && (orderOption.stream || orderOption.offline || orderOption.character) &&
                                                <div className="check-div">
                                                    <input type="checkbox" disabled checked={false}/><span style={{color:"#888888"}}>Play with Booster<Badge className="order-badge disabled" pill>+35%</Badge></span>
                                                </div>
                                            }
                                            {
                                                boostType !== 3 && !orderOption.play &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.offline} onClick={() => setorderOption({...orderOption, offline:!orderOption.offline})} /><span>Appear Offline<Badge className="order-badge free" pill>Free</Badge></span>
                                                </div>
                                            }
                                            {
                                                boostType !== 3 && !orderOption.play &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.character} onClick={() => setorderOption({...orderOption, character:!orderOption.character})} /><span>Specific Characters <Badge className="order-badge free" pill>Free</Badge></span>
                                                </div>
                                            }
                                            {
                                                (boostType === 2 && orderOption.play) &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.game} onClick={() => setorderOption({...orderOption, game:!orderOption.game})} /><span>Games instead of wins<Badge className="order-badge discount" pill>-30%</Badge></span>
                                                </div>
                                            }
                                            {
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.priority} onClick={() => setorderOption({...orderOption, priority:!orderOption.priority})} /><span>Priority Order <Badge className="order-badge cost" pill>+20%</Badge></span>
                                                </div>
                                            }
                                            {
                                                (boostType === 2 && orderOption.play || boostType === 3 || boostType === 4 && orderOption.play) &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.premium} onClick={() => setorderOption({...orderOption, premium:!orderOption.premium})} /><span>Premium Coaching<Badge className="order-badge cost" pill>+30%</Badge></span>
                                                </div>
                                            }
                                            {
                                                boostType !== 3 && !orderOption.play &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.stream} onClick={() => setorderOption({...orderOption, stream:!orderOption.stream})} /><span>Stream games <Badge className="order-badge cost" pill>+20%</Badge></span>
                                                </div>
                                            }
                                            {
                                                (boostType === 3 || boostType === 2 && orderOption.play) &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.high} onClick={() => setorderOption({...orderOption, high:!orderOption.high})} /><span>High-MMR account <Badge className="order-badge cost" pill>+20%</Badge></span>
                                                </div>
                                            }
                                            </div>
                                        }
                                    </div>
                                }
                                <div className="shield"><i className="fas fa-shield-alt" aria-hidden="true"></i></div>
                            </div>
                            <div className="buy-now">
                                <div className="d-flex">
                                    <div className="flex-fill buy-checkout">
                                        <div className="gubel">
                                            <p><i className="fas fa-check" style={{color:basicColor}} aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;User-friendly dashboard</p>
                                        </div>
                                        <div className="gubel">
                                            <p><i className="fas fa-check" style={{color:basicColor}} aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;100% Refund guarantee</p>
                                        </div>
                                        <div className="gubel">
                                            <p><i className="fas fa-check" style={{color:basicColor}} aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;SSL secured payment</p>
                                        </div>
                                        <div className="gubel">
                                            <p><i className="fas fa-check" style={{color:basicColor}} aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Chat with booster</p>
                                        </div>
                                    </div>
                                    <div className="flex-fill" style={{textAlign:"center"}}>
                                        <div className="price d-flex justify-content-center">
                                            €{price.total}
                                            <div style={{fontSize:"13px", marginLeft:"0.2rem"}}>
                                                <p style={{color:"#ebb434"}}>+{(price.plus*100).toFixed(0)}%</p>
                                            </div>
                                        </div>
                                        <button className="boost-btn" style={{backgroundColor:basicColor}} onClick={onBoost}>BOOST NOW</button>
                                        {!currentUser && <p style={{color:basicColor}}>Login first to boost!</p>}
                                    </div>
                                </div>
                                <div className="buy-footer">
                                    {/* Start & reach your desired rank safely! */}
                                </div>
                            </div>
                        </div>
                        <div className="boost-star">
                            <img src="./images/truepilot.svg" alt="truepilot" />
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default BoostingContent;