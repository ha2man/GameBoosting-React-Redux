import { Container } from "reactstrap";
function JoinServer() {
    return (
        <div style={{
            position: 'relative',
            backgroundColor: '#010518',
            padding: '68px 0',
            borderTop: '1px solid #F1AC5C',
            borderBottom: '1px solid #F1AC5C',
        }}>
            <div className="filter-join" style={{
                position: 'absolute',
                background: '#EE9328',
                left: '-10px',
                width: '279px',
                height: '100%',
            }}>
            </div>
            <Container fluid='md' style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', width:'100%', height:'100%', alignItems:'center'}}>
                <div style={{width:'60%', minWidth: '300px'}}>
                    <p style={{color: '#FFFFFF', fontWeight:'400', fontSize: '49px', fontFamily: 'odibeeSansFont'}}>
                        Join Our Discord Server
                    </p>
                    <p style={{width:'65%', color: '#BABED6', fontWeight:'500', fontSize: '16px', fontFamily: 'urbanistFont'}}>
                        Cras at pellentesque eros. Nullam vitae sapien et felis eleifend luctus. Nam ac dui cursus, efficitur ante sed, tempor sapien. Praesent nec mattis enim. Mauris a laoreet purus.
                    </p>
                </div>
                <div style={{minWidth: '300px', float:"right"}}>
                    <button className="btn-orange" style={{width:'230px'}}><a href="https://discord.com/invite/mt7Q6ENp" target="_blank" style={{color: 'white', textDecoration:'none'}}>Join Discord Server</a></button>
                </div>
            </Container>
            
        </div>
    )
}

export default JoinServer;