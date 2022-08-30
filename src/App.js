import "./App.css";
import TextForm from "./components/TextForm.js";
import Navbar from "./components/Navbar.js";
// import About from "./components/About.js";
import React, { useState } from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is on or off
  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#aca7a7';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
    {/* <Router> */}

      <Navbar
        title="TextUtils"
        aboutText="About "
        mode={mode}
        toggleMode={toggleMode}
        />

      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={}> */}
          {/* <About /> */}
          {/* </Route> */}
         
        
          {/* <Route exact path="/" element={}> */}
          <TextForm heading="Enter the text to analyze" mode={mode} />
          {/* </Route>
        </Routes> */}
      </div>
      <div className="container my-3">{/* <About></About> */}</div>
        {/* </Router> */}
    </>
  );
}
export default App;
