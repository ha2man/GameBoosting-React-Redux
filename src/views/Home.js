import React from 'react'
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Common/Carousel';
import FAQ from './index-sections/FAQ';
import ImageBlock from 'components/Common/ImageBlock';
import { Grid } from 'swiper';

function Home() {
    const rocket_color='250,50,150';
    const legend_color='50,150,250';
    const navigate = useNavigate();
    return (
        <div className=''>
            <div
                className="page-header-image"
                style={{
                    position: 'relative',
                    width: "100%",
                    height: "calc(100vh)",
                    // backgroundPosition: "bottom",
                    // backgroundSize: "cover",
                    // backgroundImage: `url("/images/background-wallpaper/1.jpg")`,
                }}
            >
                <Carousel />
                <div className="page-header custom-home" style={{height:"100%"}}>
                    <div className="content-center brand custom-home">
                        <h1 className='h1-seo-home'>
                            Relatedboost
                        </h1>
                        <p style={{marginLeft:'30px', marginRight:'30px', fontSize:'22px', opacity:'0.9'}}>Fusce erat dui, venenatis et erat in, vulputate dignissim lacus.
                            Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.</p>
                        <button onClick={() => navigate("/rocket-league-boosting")} className='my-btn-white' style={{marginTop:'100px', fontSize:'20px', fontWeight:'500',}}>
                            Get Start
                        </button>
                    </div>
                </div>
            </div>
            <div style={{
                    height:'696px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url("/images/background-wallpaper/slide-22.png")`,
                    boxShadow:'inset 0px 50px 50px rgba(0, 0, 0, 0.8)',
                }}>
                <div className='container py-5' style={{height:'100%'}}>
                    <div className='image-block-container'>
                        <div className='image-block-group rocket'>
                            <span className='image-block-center' onClick={() => navigate('/rocket-league-boosting')}>
                                <ImageBlock center={true} color={rocket_color} size={180} url='/images/rocket_rank/rocket-big.png' />
                                <div className='text-center' style={{color:`rgb(${rocket_color})`,fontSize:'20px',fontWeight:'600'}}><strong>+7</strong> services</div>
                            </span>
                            <span className='image-block' style={{animationDelay: '-9s'}}><ImageBlock color={rocket_color} size={120} url='/images/rocket_rank/gc2.png' /></span>
                            <span className='image-block' style={{animationDelay: '-18s'}}><ImageBlock color={rocket_color} size={120} url='/images/rocket_rank/unranked.png' /></span>
                            <span className='image-block' style={{animationDelay: '-27s'}}><ImageBlock color={rocket_color} size={120} url='/images/rocket_rank/diamond2.png' /></span>
                            <span className='image-block' style={{animationDelay: '-36s'}}><ImageBlock color={rocket_color} size={120} url='/images/rocket_rank/tournamentwin.png' /></span>
                            <span className='image-block' style={{animationDelay: '-45s'}}><ImageBlock color={rocket_color} size={120} url='/images/rocket_rank/champion1.png' /></span>
                            <span className='image-block' style={{animationDelay: '-54s'}}><ImageBlock color={rocket_color} size={120} url='/images/rocket_rank/ssl.png' /></span>
                            <span className='image-block' style={{animationDelay: '-63s'}}><ImageBlock color={rocket_color} size={120} url='/images/rocket_rank/champion2.png' /></span>
                        </div>
                        <div className='image-block-group legend'>
                            <span className='image-block-center' onClick={() => navigate('/league-legend-boosting')}>
                                <ImageBlock color={legend_color} size={180} url='/images/legend_rank/legend.png' />
                                <div className='text-center' style={{color:`rgb(${legend_color})`,fontSize:'20px',fontWeight:'600'}}><strong>+5</strong> services</div>
                            </span>
                            <span className='image-block' style={{animationDelay: '-9s'}}><ImageBlock color={legend_color} size={120} url='/images/legend_rank/rank_boosting.png' /></span>
                            <span className='image-block' style={{animationDelay: '-18s'}}><ImageBlock color={legend_color} size={120} url='/images/legend_rank/win_boosting.png' /></span>
                            <span className='image-block' style={{animationDelay: '-27s'}}><ImageBlock color={legend_color} size={120} url='/images/legend_rank/duo_boosting.png' /></span>
                            <span className='image-block' style={{animationDelay: '-36s'}}><ImageBlock color={legend_color} size={120} url='/images/legend_rank/placements.png' /></span>
                            <span className='image-block' style={{animationDelay: '-45s'}}><ImageBlock color={legend_color} size={120} url='/images/legend_rank/coaching.png' /></span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div style={{
                width:'100%',
                backgroundImage: `url("/images/background-wallpaper/circle-back.png")`,
                boxShadow:'inset 0px 50px 50px rgba(0, 0, 0, 0.8)',
            }}>
                <div className='container m-auto' style={{fontSize: '18px', padding: '1rem', color: '#CECECE'}}>
                    <div className='d-flex' style={{}}>
                        <div style={{marginRight:'1rem', padding: '3rem', marginTop: '5rem', marginBottom: '5rem', alignItems: 'center', border: '3px solid #FA279A', borderRadius: '50px'}}>
                            <p style={{fontSize:'26px', fontWeight:'600', color: '#FA6B3A'}}>
                                - Yasuo - 
                            </p>
                            <p>
                                "Death is like the wind, always by my side," murmured Yasuo, the Unforgiven, as he unsheathed his sword. With lightning-fast reflexes, he deflected the incoming projectiles and spun around, his blade cutting through the air with deadly precision. "But I am the storm," he said with a fierce grin, ready to take on any challenge that came his way.
                            </p>
                        </div>
                        <div>
                            <img src='./images/character/Yasuo.png' alt='Yasuo' style={{width:'100%', minWidth:'350px'}} />
                        </div>
                    </div>
                    <div>
                        <div style={{marginLeft: '1rem'}}>
                            <img src='./images/character/twin.png' alt='Twin' style={{width:'50%', minWidth:'300px'}} />
                        </div>
                        <div style={{padding: '3rem', marginBottom: '5rem', alignItems: 'center', border: '3px solid #598A5A', borderRadius: '50px'}}>
                            <p style={{fontSize:'26px', fontWeight:'600', color: '#8ABB3A'}}>
                                - Shaco - 
                            </p>
                            <p>
                                Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img src='./images/character/Katarina.png' alt='Katarina' style={{width: '90%', minWidth:'400px'}} />
                        </div>
                        <div style={{padding: '3rem', marginTop: '5rem', marginBottom: '5rem', alignItems: 'center', border: '3px solid #88279A', borderRadius: '50px'}}>
                            <p style={{fontSize:'26px', fontWeight:'600', color: '#9A2B8A'}}>
                                - Katarina - 
                            </p>
                            <p style={{textAlign: 'justify'}}>
                                I love providing the best service to all our customers! But, many of them are afraid to buy because they don't want to be disappointed. Check our Trustpilot page and see for yourself.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />
        </div>
    )
}

export default Home;