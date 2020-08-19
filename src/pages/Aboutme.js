import React from 'react'
import pic from '../img/Dishoo.jpg'
import "./FirstPage.css";
import Typical from 'react-typical'

import { Col, Container, Row } from 'reactstrap';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import ParticlesBg from 'particles-bg';



const Aboutme =() => {
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
        
        <div style={{marginTop:"10%"}}>
       <Navbar/>

            <Container>
            <Row >
            <Col>
            <div class="image"  >
              <a href="#"><img src={pic} alt="" /></a>
    </div>
    <div style={{marginTop:"2%",marginLeft:"30%"}}>
    <h3 style={{color:"white"}}>Who is this guy?</h3>
   <h4 style={{color:"white"}}> <Typical steps={["I am Amber Prakash Rai. ",1500, "I am a Developer.", 1500,"I am a Youtuber.",1500]}
    loop={Infinity} wrapper="p"/> </h4>
   </div>
    </Col>
    <Col>
            <h2 style={{marginTop:"12%"}}>About Me</h2>
            <hr style={{width:"60%%", height:"3px",color:"white"}}/>
            <h3>I am a Full Stack Developer for Capgemini in Bangalore,India</h3>
            <br/>
            <h3>As a Developer I'm always ready to face new challenges. I believe a right thinking and great design can result into an Amazing Application.</h3>
            </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            </Container>
            <Footer/>
            <ParticlesBg type="cobweb" config={config} bg={true} />

        </div>
    )
}

export default Aboutme;
