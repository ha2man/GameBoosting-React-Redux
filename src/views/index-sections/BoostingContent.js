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
            navigate('/');
        } else {
            setModal(!modal);
        }
    }
    return (
        <div className="boost-content">
            <Container fluid='md'>
            <Modal isOpen={modal} toggle={toggle} size="md" centered>
                <ModalHeader toggle={toggle} style={{backgroundColor:"#010518", justifyContent:'center', padding:"2rem", fontFamily:'odibeeSansFont', textAlign:'center', fontSize:'49px', fontWeight:'400'}}>
                    Payment
                </ModalHeader>
                <ModalBody style={{padding:"0 40px", backgroundColor:"#010518"}}>
                    {
                        !orderOption.play ?
                        <div>
                            <div style={{marginBottom:'16px'}}>
                                <h3 style={{display:"inline", fontSize:'24px', fontWeight:'700'}}>Game Account Details:</h3>
                            </div>
                                <div style={{marginBottom:'24px'}}>
                                    <div style={{
                                        display:'flex', backgroundColor: '#150D24',
                                        border: '1px solid #F1AC5C',
                                        borderRadius: '8px',
                                        alignItems: 'center',
                                        padding: '16px',
                                    }}>
                                        <img src={require('../../assets/img/avatar.png')} alt="avatar" width={28} height={28} />
                                        <input type="text" value={guserdata} onChange={(e) => setGUserdata(e.target.value)} placeholder="Username/Email" />
                                    </div>
                                </div>
                                <div>
                                    <div style={{
                                        display:'flex', backgroundColor: '#150D24',
                                        border: '1px solid #F1AC5C',
                                        borderRadius: '8px',
                                        alignItems: 'center',
                                        padding: '16px',
                                    }}>
                                        <img src={require('../../assets/img/password.png')} alt="avatar" width={28} height={28} />
                                        <input type={eye?"text":"password"} value={gpassword} onChange={(e) => setGPassword(e.target.value)} placeholder="Password" />
                                    </div>
                                    
                                </div>
                        </div> : 
                        <div></div>
                    }
                    <div style={{borderTop:'1px solid #F1AC5C', width:'100%', marginTop:'32px'}}></div>
                    <div style={{display:'flex', justifyContent:'space-between', fontSize:'24px', fontWeight:'700', marginTop:'32px'}}>
                        <div>
                            From{" "}
                            <span>{current>=current_list.length?"":current_list[current].name}</span>
                            {" "}to{" "}
                            <span>{desired>=desired_list.length?"":desired_list[desired].name}</span>
                        </div>
                        <div>
                            <span>€{price.total}</span>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter style={{padding:"0 40px", paddingTop: '48px', backgroundColor:"#010518"}}>
                    <PayPalScriptProvider options={{
                        "client-id": clientID,
                        components: "buttons",
                        currency: "EUR"
                    }}>
                    <div className="d-flex text-center" style={{width:"100%"}}>
                        
                        <div className="flex-fill">
                            {/* <button onClick={onSubmit} className="btn-orange mb-3">PayPal</button> */}
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
                <Col xs={{size:'12'}} xl={{size:'8'}}>
                    <div className="boost-main">
                        <div className="filter-boost" style={{
                            position: 'absolute',
                            background: '#EE9328',
                            left: '-24.31%',
                            top: '-7.6%',
                            width: '310px',
                            height: '310px',
                            zIndex: 0,
                        }}>
                        </div>
                        <div style={{fontFamily:'odibeeSansFont', fontSize:'16px', fontWeight: 500, paddingTop:'24px'}}>
                            <span>Home /</span>
                            <span style={{color: '#C8CCFF'}}> Shop</span>
                        </div>
                        <div className="d-flex title">
                            <p style={{color: '#FFFFFF', fontFamily:'odibeeSansFont', fontSize:'68px', fontWeight:'400'}}>{game==='rocket'?'Rocket League boosting':'League of Legends boosting'}</p>
                        </div>
                        <div className='d-flex' style={{alignItems: 'center'}}>
                            <img src={require('../../assets/img/Shape.png')} width={36} height={34} alt='shape' />
                            <p style={{color: '#FFFFFF', marginLeft:'6px', fontSize:'24px', fontWeight:'700'}}>Trustpilot</p>
                            <p style={{color: '#8E95BB', marginLeft:'8px', fontSize:'16px'}}>4.8 out of 5</p>
                        </div>
                        <div style={{marginTop:'32px'}}>
                            <p style={{color:'#BABED6', fontFamily:'urbanistFont', fontSize:'20px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis vestibulum quis. Nunc dapibus libero nec lacinia commodo. Nullam non ante sit amet 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis vestibulum quis. Nunc dapibus libero nec lacinia commodo. Nullam non ante sit amet 
                            </p>
                        </div>
                        <div style={{width: 'calc(80vw)'}}>
                            {
                                game === "legend" ?
                                <div className="d-flex" style={{marginTop:'24px', fontFamily:'urbanistFont'}}>
                                    <div className="pr-3">
                                        <p style={{fontSize:'12px', fontWeight:'500', paddingBottom:'6px'}}>Select your server</p>
                                            <select value={server} onChange={(e) => setServer(e.target.value)}>
                                                {
                                                    serverList.map(item => (
                                                        <option key={"server"+item.value} value={item.value}>{item.name}</option>
                                                    ))
                                                }:
                                                <div></div>
                                            </select>
                                    </div>
                                    <div className="mainCheckout">
                                        {
                                            boostType === 5 ?
                                            <div>
                                                
                                            </div> :
                                            <div style={{display:'flex', flexWrap:'wrap'}}>
                                            {
                                                boostType%2 === 0 && !orderOption.stream && !orderOption.offline && !orderOption.character &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.play} onClick={() => setorderOption({...orderOption, play:!orderOption.play})} /><span>Play with Booster</span>
                                                </div>
                                            }
                                            {
                                                boostType%2 === 0 && (orderOption.stream || orderOption.offline || orderOption.character) &&
                                                <div className="check-div">
                                                    <input type="checkbox" disabled checked={false}/><span style={{color:"#888888"}}>Play with Booster</span>
                                                </div>
                                            }
                                            {
                                                boostType !== 3 && !orderOption.play &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.offline} onClick={() => setorderOption({...orderOption, offline:!orderOption.offline})} /><span>Appear Offline</span>
                                                </div>
                                            }
                                            {
                                                boostType !== 3 && !orderOption.play &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.character} onClick={() => setorderOption({...orderOption, character:!orderOption.character})} /><span>Specific Characters</span>
                                                </div>
                                            }
                                            {
                                                (boostType === 2 && orderOption.play) &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.game} onClick={() => setorderOption({...orderOption, game:!orderOption.game})} /><span>Games instead of wins</span>
                                                </div>
                                            }
                                            {
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.priority} onClick={() => setorderOption({...orderOption, priority:!orderOption.priority})} /><span>Priority Order</span>
                                                </div>
                                            }
                                            {
                                                (boostType === 2 && orderOption.play || boostType === 3 || boostType === 4 && orderOption.play) &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.premium} onClick={() => setorderOption({...orderOption, premium:!orderOption.premium})} /><span>Premium Coaching</span>
                                                </div>
                                            }
                                            {
                                                boostType !== 3 && !orderOption.play &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.stream} onClick={() => setorderOption({...orderOption, stream:!orderOption.stream})} /><span>Stream games</span>
                                                </div>
                                            }
                                            {
                                                (boostType === 3 || boostType === 2 && orderOption.play) &&
                                                <div className="check-div">
                                                    <input type="checkbox" checked={orderOption.high} onClick={() => setorderOption({...orderOption, high:!orderOption.high})} /><span>High-MMR account</span>
                                                </div>
                                            }
                                            </div>
                                        }
                                    </div>
                                </div> :
                                <div className="d-flex" style={{marginTop:'24px', fontFamily:'urbanistFont'}}>
                                        <div className="pr-3">
                                            <p style={{fontSize:'12px', fontWeight:'500', paddingBottom:'6px'}}>Select your platform</p>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent:'space-around',
                                                padding:'8px',
                                                border: '2px solid #D43E3E',
                                                borderRadius:'8px',
                                            }}>
                                                {
                                                    platformList.map(item => (
                                                        <div key={"platform"+item.value} style={{
                                                            padding:'8px 15px',
                                                            margin:'0 1px',
                                                            cursor:'pointer',
                                                            borderRadius: '4px',
                                                            fontSize:'14px',
                                                            fontWeight:'500',
                                                            backgroundColor: item.value===platform?'#D43E3E':'#00000000',
                                                        }} onClick={(e) => setPlatform(item.value)} value={item.value}>{item.name}</div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        {
                                            boostType!==4 ?
                                            <div className="">
                                                <p style={{fontSize:'12px', fontWeight:'500', paddingBottom:'6px'}}>Select gamemode</p>
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
                                        <div className="your-order">
                                            <div className="mainCheckout">
                                                {
                                                    boostType < 6 ?
                                                        <div style={{display:'flex', flexWrap:'wrap'}}>
                                                            <div className="check-div">
                                                                <input type="checkbox" checked={orderOption.play} onClick={() => {setorderOption({...orderOption, play:!orderOption.play, live:(!orderOption.play?false:orderOption.live)})}} /><span>Play with booster</span>
                                                            </div>
                                                            <div className="check-div">
                                                                <input type="checkbox" checked={orderOption.live} onClick={() => {setorderOption({...orderOption, live:!orderOption.live, play:(!orderOption.live?false:orderOption.play)})}} /><span>Live stream</span>
                                                            </div>
                                                            <div className="check-div">
                                                                <input type="checkbox" checked={orderOption.priority} onClick={() => {setorderOption({...orderOption, priority:!orderOption.priority})}} /><span>Priority Order</span>
                                                            </div>
                                                        </div> :
                                                    <div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                </div>
                            }
                        </div>
                    </div>
                </Col>
                <Col xs={{size:'12'}} xl={{size:'4'}} style={{display:'flex', justifyContent:'center'}}>
                    <div className='boost-order'>
                        <div className="boost-buy" style={{minWidth: '24rem'}}>
                            <h2 style={{fontSize:'28px', fontWeight:'700', paddingBottom:'16px'}}>Your Order</h2>
                            <div className="current-rank">
                                <div className="d-flex">
                                    <span className="flex-grow-1">
                                        <p style={{fontSize:'12px', fontWeight:'500', paddingBottom:'6px'}}>Select your current rank:</p>
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
                            <div className="desired-wins" style={{marginTop:'24px'}}>
                                <div className="d-flex">
                                <span className="flex-grow-1">
                                    <p style={{fontSize:'12px', fontWeight:'500', paddingBottom:'6px'}}>Select your desired rank:</p>
                                        <select onChange={onDesired} value={desired_list[desired>=desired_list.length?0:desired].value}>
                                        {
                                            desired_list.map(item => (
                                                <option key={"desired"+item.value} value={item.value}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </span>
                            </div>
                            <div style={{borderTop:'1px solid #F1AC5C', marginTop:'32px', marginBottom:'12px'}}></div>
                        </div>
                            <div className="buy-now">
                                <div className="d-flex" style={{justifyContent:'space-between'}}>
                                    <div style={{fontSize:'16px', fontWeight:'700'}}>Price</div>
                                    <div style={{fontSize:'20px', fontWeight:'700'}} className="price d-flex">
                                        €{price.total}
                                    </div>
                                </div>
                                <button className="btn-orange" style={{marginTop:'24px', width:'100%'}} onClick={onBoost}>Boost Now</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default BoostingContent;