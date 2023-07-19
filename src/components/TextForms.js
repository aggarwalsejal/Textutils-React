import React, { useState } from "react";

export default function TextForms(props) {
  // eslint-disable-next-line
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("light");
  const [weight, setStyle] = useState("");
  const [Family, setFamily] = useState({
    fontFamily: "Arial",
  });
  const [line, setLine] = useState("");
//text reverse
  const handleReverse = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    let newtext = "";
    for (let index = text.length - 1; index >= 0; index--) {
      newtext += text[index];
    }
    setText(newtext);
    props.showAlert("Text has been Reversed","success");
  }
  };
  //onchange function
  const handleOnChnage = (event) => {
    setText(event.target.value);
  };
  //to change the theme of the textarea
  const toggleTheme = () => {
    if (theme === "light") {
      var input1 = document.getElementById('myBox');
 input1.style.backgroundColor = 'black';
 input1.style.color = 'white';
 setTheme("dark");
 props.showAlert("Theme has been updated to Dark","success");
    }
    else{
      var input2= document.getElementById('myBox');
      input2.style.backgroundColor = 'white';
 input2.style.color = 'black';
      setTheme("light");
      props.showAlert("Theme has been updated to Light","success");
    }
  };
  //to make the text bold
  const handleBold = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    if (weight.fontWeight === "normal"){ setStyle({ fontWeight: "bold" });
    props.showAlert("Text is converted to bold","success");
  }
    else {setStyle({ fontWeight: "normal" });
    props.showAlert("Text is converted to normal","success");
  }
}
  };
  //to make the text italic
  const handleItalic = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    if (Family.fontFamily === "Arial") {setFamily({ fontFamily: "Italic" });
    props.showAlert("Text is converted to italic","success");
  }
    else {setFamily({ fontFamily: "Arial" });
    props.showAlert("Text is converted to normal","success");
}
    }
  };
  //to make text underlined
  const handleUnderline = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    if (line.textDecorationLine === "null"){
      setLine({ textDecorationLine: "underline" });
    }
    else {
      var input2= document.getElementById('myBox');
      input2.style.textDecoration = "underline"
    setLine({ textDecorationLine: "null" })
    }
    props.showAlert("Text is underlined","success");
  }
  };
  //to left align the text
  const leftAlign = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    document.getElementById("myBox").style.textAlign = "left";
    props.showAlert("Text is left aligned","success");
    }
  }
  //to right align te text
  const rightAlign = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    document.getElementById("myBox").style.textAlign = "right";
    props.showAlert("Text is right aligned","success");
    }
  }
  //to center the text
  const centerAlign = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    document.getElementById("myBox").style.textAlign = "center";
    props.showAlert("Text is center aligned","success");
    }
  }
  //convert upper case
  const handleUpClick = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase","success");
    }
  };
  //convert lower case
  const handleLoClick = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase","success");
    }
  };
  //copy text to clipboard
  const handleCopy = () => {
    if(document.getElementById("myBox").value===""){
      props.showAlert("There is no text to copy","danger");
    }
    else{
    var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success");
    }
  };
  //clear textarea
  const handleClear = () => {
    if(text===""){
      props.showAlert("No text present to clear","danger");
    }
    else{
    setText("");
    props.showAlert("Textarea is clear","success");
    }
  };
  //remove extra spaces
  const handleExtraSpace = () => {
    if(text===""){
      props.showAlert("There is no extra spaces avaiable currently","danger");
    }
    else{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces has been removed","success");
    }
  };
  //general text
  const handletext = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    let newtext = text
      .toLowerCase()
      .split(/[ ]+/)
      .map((text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
      });
    setText(newtext.join(" "));
    props.showAlert("General Text","success");
    }
  };
  //alternate conversion
  const onAlternatingCase = () => {
    if(text===""){
      props.showAlert("Enter text","danger");
    }
    else{
    let newtext = "";
    for (let index = 0; index < text.length; index++) {
      if (index % 2 === 0) {
        newtext += text[index].toLowerCase();
      } else {
        newtext += text[index].toUpperCase();
      }
    }
    setText(newtext);
    props.showAlert("Alternative conversion of text","success");
  }
  };
  return (
    <>
      <div className="mb-3">
        <label for="myBox mt-3" className="form-label">
        <h1> <strong>TEXTUTILS</strong></h1>
        </label>
        <textarea
          className="form-control mt-3"
          placeholder="Type Something"
          value={text}
          style={Object.assign({},Family, line, weight, {backgorundColor: props.mode==='dard'?'white':'dark'},{color: props.mode==='dard'?'grey':'light'} )}
          id="myBox"
          rows="12"
          onChange={handleOnChnage}
        >
           <p>{text.length>0?`${text}`: ""}</p>
        </textarea>
        <div>
          <button
            className="btn btn-primary  mx-2 my-4"
            onClick={handleReverse}
          >
            Reverse
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={toggleTheme}>
            Theme
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={handleBold}>
            Bold
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={handleItalic}>
            Italic
          </button>
          <button
            className="btn btn-primary  mx-2 my-4"
            onClick={handleUnderline}
          >
            Underline
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={leftAlign}>
            Left Align
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={rightAlign}>
            Right Align
          </button>
          <button className="btn btn-primary  mx-2 my-4" onClick={centerAlign}>
            Center Align
          </button>
          </div>
          <div>
          <button className="btn btn-primary mx-2 my-4" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2 my-4" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2 my-4" onClick={handleCopy}>
          Copy To ClipBoard
        </button>
        <button className="btn btn-primary  mx-2 my-4" onClick={handleClear}>
          Clear
        </button>
        <button
          className="btn btn-primary  mx-2 my-4"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary  mx-2 my-4" onClick={handletext}>
          Generalised Text
        </button>
        <button
          className="btn btn-primary  mx-2 my-4"
          onClick={onAlternatingCase}
        >
          Alternating Text
        </button>
          </div>
          <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
        {text.split(/[ ]+/).filter((a1)=>{return a1.length!==0}).length} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split("").length} minutes would be required to read the
          above entered text
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?`${text}`: "Enter something in the textbox preview"}</p>

      </div>
      </div>
    </>
  );
}