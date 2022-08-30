import React, { useState } from "react";
import PropTypes from "prop-types";


export default function TextForm(props) {
  const [text, setText] = useState('');
  // defaultText("Balushai MMithai");
  const handleUpClick = () => {
  
    let newText=text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
  
    let newText=text.toLowerCase();
    setText(newText);
  };
  let handleOnChange = (e) => {
    // console.log("I am onChange" );
    setText(e.target.value);
  };

  const copyClipboard=()=>{
    var copyText=document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    // alert("Copied the text: " + copyText.value);
    
  }
  return (
    <>
    <div >
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          ></textarea>
      </div>
      <button className="btn btn-primary" role="button" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" role="button" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2" role="button" onClick={copyClipboard}>
        Copy to Clipboard
      </button>
    </div>
          <div className="container my-3">
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length}characters</p>
            <p>{0.08 * text.split(" ").length} Minutes Read</p>
            <h2>Text Preview</h2>
            <p>{text}</p>
          </div>
          </>
  );
}
