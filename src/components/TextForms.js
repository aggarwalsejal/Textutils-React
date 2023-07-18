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
    let newtext = "";
    for (let index = text.length - 1; index >= 0; index--) {
      newtext += text[index];
    }
    setText(newtext);
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
    }
    else{
      var input2= document.getElementById('myBox');
      input2.style.backgroundColor = 'white';
 input2.style.color = 'black';
      setTheme("light");
    }
  };
  //to make the text bold
  const handleBold = () => {
    if (weight.fontWeight === "normal") setStyle({ fontWeight: "bold" });
    else setStyle({ fontWeight: "normal" });
  };
  //to make the text italic
  const handleItalic = () => {
    if (Family.fontFamily === "Arial") setFamily({ fontFamily: "Italic" });
    else setFamily({ fontFamily: "Arial" });
  };
  //to make text underlined
  const handleUnderline = () => {
    if (line.textDecorationLine === "null"){
      setLine({ textDecorationLine: "underline" });
    }
    else {
      var input2= document.getElementById('myBox');
      input2.style.textDecoration = "underline"
    setLine({ textDecorationLine: "null" })
    }
  };
  //to left align the text
  const leftAlign = () => {
    document.getElementById("myBox").style.textAlign = "left";
  }
  //to right align te text
  const rightAlign = () => {
    document.getElementById("myBox").style.textAlign = "right";
  }
  //to center the text
  const centerAlign = () => {
    document.getElementById("myBox").style.textAlign = "center";
  }
  //convert upper case
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
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
          </div>
      </div>
    </>
  );
}