import React from 'react'
import pic1 from '../img/mern.jpg'
import pic2 from '../img/mean.png'
import pic3 from '../img/jfs.png'
import pic4 from '../img/sql.jpeg'
import pic5 from '../img/mongo.png'
import pic6 from '../img/firebase.jpg'
import pic7 from '../img/java.jpeg'
import pic8 from '../img/python.jpg'
import pic9 from '../img/cobol.png'
import pic10 from '../img/AIML.jpg'
import pic11 from '../img/youtube.png'
import pic12 from '../img/music.jpg'
import pic13 from '../img/reactjs.png'

import "./FirstPage.css";

import { Col, Container, Row, Card, CardHeader, CardBody, Button, CardImg } from 'reactstrap';
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import ParticlesBg from 'particles-bg'



const Work =() => {

    let config = {
        num: [4, 10],
        rps: 0.1,
        radius: [5, 100],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [0.6, 0],
        scale: [.1, 0.4],
        position: "all",
        color: ["random", "#ff0000"],
        cross: "dead",
        // emitter: "follow",
        random: 15
      };

    if (Math.random() > 0.85) {
        config = Object.assign(config, {
          onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(
              particle.p.x,
              particle.p.y,
              particle.radius * 2,
              particle.radius * 2
            );
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
          }
        });
      }
    return (
        <div style={{marginTop:"10%"}} >
        <Navbar/>
    
  
            <Container>
           
                <h1 style={{textAlign:"center",fontSize:"55px"}}> My Work </h1>
            <hr style={{width:"60%", height:"3px",color:"white",marginLeft:"auto",marginRight:"auto"}}/>
                
                <br/>
                <h1>Projects :</h1>
                <br/>


            <Row >
            <Col>
            <Card style={{ width:"300px", textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic1} style={{ height:"150px"}}  />
                <CardHeader>MERN (MongoDB + ExpressJs + ReactJs + NodeJs)</CardHeader>
                <CardBody><Button style={{marginLeft:"auto"}}> Ecommerce + Payment Gateway</Button></CardBody>
            </Card>
            </Col>
            <br/>
            <Col>
            <Card style={{ width:"300px", textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic6} style={{ height:"150px"}} />
                <CardHeader>ReactJs + Firebase</CardHeader>
                <CardBody><Button href="https://ambercontact.netlify.app/">Contact App</Button></CardBody>
            </Card>
            </Col>
            <br/>
            <Col>
            <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic13} style={{ height:"150px"}} />
                <CardHeader>React Js + GitHub API</CardHeader>
                <CardBody><Button href="https://amazing-einstein-383bc2.netlify.app/">GitHub API</Button></CardBody>
            </Card>
            </Col>
            </Row>
            {/* <Row>
            <Col>
            <Card style={{, width:"300px"}}>
                <CardImg src={pic4} />
                <CardHeader>React Js + GitHub API</CardHeader>
                <CardBody><Button>GitHub API</Button></CardBody>
            </Card>
            </Col>
            </Row> */}
                <br/>
                <br/>

            <h1 style={{textAlign:"center",fontSize:"55px"}}> Skills that Counts </h1>
            <hr style={{width:"60%", height:"3px",color:"white",marginLeft:"auto",marginRight:"auto"}}/>
            
            <br/>
            
            <h1>Stacks :</h1>
            <br/>

            <Row>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic1} style={{ height:"150px"}} />
                <CardHeader>MERN Stack</CardHeader>
                </Card>
                </Col>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic2} style={{ height:"150px"}}/>
                <CardHeader>MEAN Stack</CardHeader>
                </Card>
                </Col>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic3} style={{ height:"150px"}}/>
                <CardHeader>Java Full Stack</CardHeader>
                </Card>
                </Col>
            </Row>
            <br/>
            
            <h1>Databases :</h1>
            <br/>

            <Row>
                <Col>
                <Card style={{width:"300px",textAlign:"center"}}>
                <CardImg src={pic4} style={{ height:"150px"}} />
                <CardHeader>SQL</CardHeader>
                </Card>
                </Col>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic5} style={{ height:"150px"}}/>
                <CardHeader>MongoDB</CardHeader>
                </Card>
                </Col>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic6}style={{ height:"150px"}} />
                <CardHeader>Firebase</CardHeader>
                </Card>
                </Col>
            </Row>
            <br/>
            
            <h1>Languages :</h1>
            <br/>

            <Row>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic7} style={{ height:"150px"}} />
                <CardHeader>Java</CardHeader>
                </Card>
                </Col>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic8} style={{ height:"150px"}} />
                <CardHeader>Python</CardHeader>
                </Card>
                </Col>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic9} style={{ height:"150px"}} />
                <CardHeader>Cobol</CardHeader>
                </Card>
                </Col>
            </Row>
            <br/>
            <br/>

            <h1 style={{textAlign:"center",fontSize:"55px"}}>Area of Interests </h1>
            <hr style={{width:"60%", height:"3px",color:"white",marginLeft:"auto",marginRight:"auto"}}/>
           
            <br/>
            
            <Row>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic10} style={{ height:"150px"}} />
                <CardHeader>AI & ML</CardHeader>
                </Card>
                </Col>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic11} style={{ height:"150px"}} />
                <CardHeader>Youtubing</CardHeader>
                </Card>
                </Col>
                <Col>
                <Card style={{ width:"300px" ,textAlign:"center"}} className="mt-2 mb-1">
                <CardImg src={pic12} style={{ height:"150px"}} />
                <CardHeader>Music</CardHeader>
                </Card>
                <br/>
             <br/>          <br/>
             <br/>
             </Col>
   

            </Row>
            </Container>
            <Footer/>
            <ParticlesBg type="cobweb" config={config} bg={true} />
        </div>
    )
}

export default Work;
