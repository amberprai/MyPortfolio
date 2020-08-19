import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import {firebaseConfig} from "./pages/config"
import firebase from "firebase/app"

import Aboutme from './pages/Aboutme';
import FirstPage from './pages/FirstPage';
import Navbar from './Layout/Navbar';
import Work from './pages/Work';
import Footer from './Layout/Footer';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

//initialize firebase
firebase.initializeApp(firebaseConfig)



function App() {
  return (
    <div >
     
     <BrowserRouter>
     <Switch>
       <Route exact path="/" component={FirstPage}></Route>

       <Route exact path="/aboutme" component={Aboutme}></Route>
       <Route exact path="/work" component={Work}></Route>
       <Route exact path="/contact" component={Contact}></Route>
       <Route exact path="/resume" component={Resume}></Route>
     </Switch>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
