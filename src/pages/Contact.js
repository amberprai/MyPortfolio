import React, { useEffect, useState } from 'react'
import "../Layout/contactcss.css"
import { v4 } from "uuid";
import firebase from "firebase/app"
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';
import 'firebase/database'
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import ParticlesBg from 'particles-bg';

const Contact= () => {
    
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
    const history = useHistory();


    const [name, setName]= useState("")
    const [email, setEmail] = useState("")
    const [message, setmessage] = useState("")
    const [newTime, setnewTime] = useState("")
  
    //setting message to firebase DB
    const addMessage = async () =>{
      
  
      try{
        firebase
        .database()
        .ref("message/"+ v4())
        .set({
          name,
          email,
          message,
          newTime
         })
  
        
      }
      catch(error){
        console.log(error)
  
      }
    }
  
    const handleSubmit = e => {
      e.preventDefault()
      addMessage();
      
      toast("Enquiry Submitted",{type:"success"});
  
       history.push("/");
    }
    useEffect(() => {
      const times= new Date();
      var fullTime  = times.getDate()+ "/" + (times.getMonth()+1) +"/" + times.getFullYear() + ", " + times.getHours() + ":" + times.getMinutes() + ":" +times.getSeconds()
      setnewTime(fullTime)
  
      }, [handleSubmit])
  
      
  
  
      return(
     <>
     <Navbar/>
    <section id="contact-form" style={{marginTop:"6%",marginBottom:"7%"}}>
      <h1 className="mt-5 text-center">Get in touch! </h1>
      
      <br/>
      <br/>
    <form id="contact" name="contact" accept-charset="utf-8" onSubmit={handleSubmit} style={{color:"white"}}>
      <label><span>Name</span><input name="name" type="text" placeholder="Name" onChange={e => setName(e.target.value)}/></label>
      <label><span>Email</span><input name="email" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/></label>
      <label><span>Query</span><textarea name="message" placeholder="Query" onChange={e => setmessage(e.target.value)}></textarea></label>
      <input name="submit" type="submit" value="Send💬" style={{color:"white"}}/>
    </form>
  </section>
  <Footer />
  <ParticlesBg type="cobweb" config={config} bg={true} />
    
          </>
      )
}

export default Contact;