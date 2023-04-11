import React from 'react'


const faqList = [
    {
        id:"1",
        title:"What is Phrixboosting?",
        content:"Phrixboosting is known as a trusted game boosting service for Rocket League and Valorant. We always provide highest customer satisfaction, and help with any questions related to the game, boosting or ranking up. Our services are available worldwide on any platform, at any time.",
    },
    {
        id:"2",
        title:"What happens after I make a purchase?",
        content:`After you have purchased, you will be able to login into the "members area". To login you will need do use the credentials you have entered in at the checkout.`,
    },
    {
        id:"3",
        title:"In which regions can you boost?",
        content:`We can boost in every region. (worldwide)`,
    },
    {
        id:"4",
        title:"What happens after the booster logs into my account?",
        content:`After our booster has logged into your account, he will send you screenshots of your settings, in case you forgot to take some before, and then start the boost.`,
    },
    {
        id:"5",
        title:"Are you capable of boosting to the top rank?",
        content:`Yes, all of our boosters are verified top level players, which can reach the highest rank every time. That means they are capable of getting you to any rank you desire. Some of them are currently top 100.`,
    },
    {
        id:"6",
        title:"Do you provide any refunds?",
        content:`We do guarantee refunds. In case you want to cancel the order before the boost has started, we will refund 100% of your money. In case we have started the boost already, we will refund you the price equal to what we haven't boosted yet.`,
    },
]

function FAQ() {
    return (
        <div className="section section-faq">
            <div className='container'>
                <div className="custom-faq">
                    <div className="header">FAQ</div>
                    <div className="sub-header mb-5">frequently asked questions</div>
                        {
                            faqList.map((item) => (
                                <div key={item.id} className="area">
                                    <button type="button" className="custom p-3" data-bs-toggle="collapse" data-bs-target={"#demo"+item.id}>{item.title}</button>
                                    <div id={"demo"+item.id} className="collapse custom-faq-content">
                                        <p className='px-3 py-4'>{item.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default FAQ;