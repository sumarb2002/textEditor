import React, { useState } from 'react'
// import React from 'react'

export default function Editor(property) {
    const [text, setText] = useState("Enter text here");
    var disabled = text.length === 0;
    function changeText(event)
    {
        setText(event.target.value); 
    }
    function upperCase(event)
    {
      console.log(disabled);
        // console.log(text.toUpperCase());
        setText(text.toUpperCase());
        property.showAlert("Converted to Upper Case","success");
    }
    function lowerCase(event)
        {
            setText(text.toLowerCase());
        property.showAlert("Converted to Lower Case","success");

        }
        function ClearText()
        {
          setText("");
          property.showAlert("Text Cleared","success");
        }
    function Copy()
    {
      var newtext = document.getElementById('txtarea')
      newtext.select();
      navigator.clipboard.writeText(newtext.value);
      property.showAlert("Text copied To Clipboard","success");
    }   
    function rExtraSpace()
    {
      var newtext = text.split(/[  ]+/);
      setText(newtext.join(" "));
      property.showAlert("Extra Spaces Are Removed","success");
    } 
    function CountingWords()
    {
      // text===''?'0':text.split(" ").length
      return text.split(" ").filter(function(element)
    {
      return element.length !==0;
    }).length;
    }
    
  return (
    <div>
      <div className="container my-4" style={property.mode==='light'?{color:'black'}:{color:'white'}}>
    <h1>Enter the Text Here to analyse</h1>
     <textarea className="form-control" id="txtarea" rows="8" value={text} onChange={changeText}>

     </textarea>
    <button className="btn btn-primary m-2" disabled = {disabled} onClick={upperCase}>Convert to UPPER CASE</button>
    <button className="btn btn-primary m-2" disabled = {disabled} onClick={lowerCase}>Convert to LOWER CASE</button>   
    <button className="btn btn-primary m-2" disabled = {disabled} onClick={Copy}>Copy Text</button>
    <button className="btn btn-primary m-2" disabled = {disabled} onClick={rExtraSpace}>remove Extra Space</button>
    <button className="btn btn-danger m-2"  disabled = {disabled} onClick={ClearText}>Clear Text</button> 

       <h3 className="my-2">Your text Summary</h3>
    <h6>{CountingWords()} words and {text.length} characters. {text===''?'0':text.split(" ").filter(function(element){return element.length !==0;}).length*0.008 } Minutes read</h6><br/>
    <h3>Preview</h3>
    <p>{text === ''?'Nothing to preview':text}</p>
</div>
    </div>
  )
}
