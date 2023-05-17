import React from 'react'


const faqList = [
    {
        id:1,
        title:"What is RelatedBoosting?",
        content:"At our website, we've established ourselves as a reliable and trustworthy game boosting service that specializes in Rocket League and League of Legends. Our number one priority is customer satisfaction, and we strive to provide top-notch support to assist you with any questions or concerns related to the game, boosting, or ranking up. No matter where you are in the world or what platform you're playing on, our services are available to you 24/7, ensuring that you can get the boost you need at any time.",
        state:false,
    },
    {
        id:2,
        title:"What happens after I make a purchase?",
        content:`After you finalise the purchase, you can contact us through Discord with the proof of payment and we will start the process as soon as possible.`,
        state:false,
    },
    {
        id:3,
        title:"In which regions can you boost?",
        content:`We can boost in every region. (worldwide)`,
        state:false,
    },
    {
        id:4,
        title:"What happens after the booster logs into my account?",
        content:`Once our booster gains access to your account, they will promptly send you screenshots of your current settings, just in case you forgot to capture them beforehand. This way, you can have a record of your original settings. Following that, our booster will initiate the boost and work diligently to achieve your desired results.`,
        state:false,
    },
    {
        id:5,
        title:"Are you capable of boosting to the top rank?",
        content:`Rest assured, all our boosters are highly skilled and verified top-level players. They have a proven track record of reaching the highest ranks consistently. This means they are more than capable of helping you achieve your desired rank, no matter how high it may be. In fact, some of our boosters are currently ranked in the top 100, showcasing their exceptional expertise and proficiency in the game. You can trust in their abilities to provide you with top-quality boosting services.`,
        state:false,
    },
    {
        id:6,
        title:"Do you provide any refunds?",
        content:`We stand behind our service with a refund policy. If you wish to cancel your order before the boost has commenced, we will provide a 100% refund of your payment. If the boost has already begun, we will calculate the refund amount based on the progress made and refund you the remaining portion that has not been completed. We value your satisfaction and want to ensure that you are completely satisfied with our service, and our refund policy reflects our commitment to your satisfaction.`,
        state:false,
    },
]

function FAQ() {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    return (
        <div className="section section-faq" style={{
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundImage: `url("images/background-wallpaper/gamekbg_generated.jpg")`,
        }}>
            <div className="filter-join" style={{
                position: 'absolute',
                background: '#EE9328',
                left: '5.31%',
                top: '-25.6%',
                width: '310px',
                height: '310px',
            }}>
            </div>
            <div className="filter-join" style={{
                position: 'absolute',
                background: '#EE9328',
                right: '-2.31%',
                bottom: '30.6%',
                width: '310px',
                height: '310px',
            }}>
            </div>
            <div className='container'>
                
                <div className="custom-faq">
                    <div className="header">Frequently Asked Questions</div>
                    <div style={{position:'relative', zIndex:'50', backgroundColor:'#010518', border:'1px solid #F1AC5C', borderRadius:'8px', padding: '64px', margin:'64px 0', boxShadow: '0px 0px 10px 1px rgba(241, 172, 92, 0.25)'}}>
                    {
                        faqList.map((item) => (
                            <div key={item.id} className="area">
                                <button onClick={() => {faqList[item.id-1].state = !faqList[item.id-1].state;forceUpdate();}} type="button" className="custom" data-bs-toggle="collapse" data-bs-target={"#demo"+item.id}>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <p style={{fontSize:'24px', fontWeight:'400'}}>
                                            {item.title}
                                        </p>
                                        <p style={{fontSize:'24px', fontWeight:'400'}}>
                                            {
                                                item.state?'-':'+'
                                            }
                                        </p>
                                    </div>
                                    
                                </button>
                                <div id={"demo"+item.id} className="collapse custom-faq-content">
                                    <p style={{padding:'24px 6px 0px 6px'}}>{item.content}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;