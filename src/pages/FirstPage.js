import React from 'react'
import ParticlesBg from "particles-bg";
import pic from '../img/Dishoo.jpg'
import { Button, Container, Col, Row } from 'reactstrap'
import "./FirstPage.css";

export default function FirstPage() {
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
        <div style={{marginTop:"4%"}}>
            <Container className="row">
            <Row >
            
            <div class="image" >
              <a href="#"><img src={pic} alt="" /></a>
    </div>
    </Row>
    <Row >

    
    
            <h1 style={{marginTop:"5%",textAlign:"center"}}> Hello, I am <l>Amber Prakash Rai</l>.<p> I am a full-stack developer.</p> </h1>
            <Button className="button" style={{marginTop:"3%", marginLeft:"auto", marginRight:"auto", border: "2px solid white"}} href="/aboutme"><span>View My Profile</span></Button>
            
            </Row>
            </Container>
            <hr style={{width:"70%", height:"3px",color:"white",marginLeft:"auto",marginRight:"auto"}}/>

            <ParticlesBg type="cobweb" config={config} bg={true} />
        </div>
    )
}
