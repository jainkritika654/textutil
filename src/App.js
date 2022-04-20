import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

 const toggleMode =() => {
    if(mode === 'light') { 
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
 }
   else {
   setMode('light');
   document.body.style.backgroundColor = 'white';
 }
  }
    return(
        <>
        <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
          <div className="container my-3" >
        <Switch>
          <Route  exact path="/about">
            <About mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze" mode={mode} />  
          </Route>
        </Switch>
        </div>  
        </Router>
        </>
    );
}
export default App;