import FAQ from "./index-sections/FAQ";

function Contact() {
    return (
        <div className="section section-contact">
            <div style={{color:'white', marginTop:'100px', marginBottom:'64px'}}>
                <h2 style={{fontFamily:'odibeeSansFont', fontSize:'78px', fontWeight:'400', textAlign:'center'}}>Contact Us</h2>
                <div className="container" style={{marginTop:'64px'}}>
                    <div className="main" style={{position:'relative', zIndex:'51', display:'flex', flexWrap:'wrap', justifyContent:'space-between', marginBottom:'32px'}}>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="main" style={{position:'relative', zIndex:'51', display:'flex', flexWrap:'wrap', justifyContent:'space-between', marginBottom:'32px'}}>
                        <input type="text" placeholder="Your Email" />
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div style={{position:'relative', zIndex:'51'}}>
                        <textarea style={{
                            backgroundColor: '#150D24',
                            width:'100%',
                        }} rows={10} placeholder="Please enter the details of your request." />
                    </div>
                </div>
                <div style={{marginTop:'48px', textAlign:'center'}}>
                    <button className="btn-orange">Contact Us</button>
                </div>
            </div>
            <FAQ />
        </div>
    )
}

export default Contact;