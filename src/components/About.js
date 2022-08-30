import React, { useState } from "react";

const About = () => {
  let [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#333",
  });
  const [btnText, setbtnText] = useState("Enable Light Mode");
  let toggleStyle = () => {
    if (myStyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "#ffff",
        border:'2px solid black',
      });
      setbtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#333",
        border:'2px solid white',

      });
      setbtnText("Enable Light Mode");
    }
  };
  return (
    <>
      <div className="container  d-flex-col justify-content-center" >
        
          <div className="row  p-5 mb-4  mx-2 my-2" style={myStyle}>this is my container</div>
          <div className="row p-5 mb-4  mx-2" style={myStyle}>this is my container</div>
          <div className="row p-5 mb-4 my-2 mx-2" style={myStyle}>this is my container</div>
        </div>
      
      <div className="container">
        <button onClick={toggleStyle} className="text-center my-2"  style={myStyle}>
          {btnText}
        </button>
      </div>
    </>
  );
};

export default About;
