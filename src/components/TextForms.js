import React, { useState } from "react";

export default function TextForms(props) {
  // eslint-disable-next-line
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("light");
  const [weight, setStyle] = useState("");
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
          style={Object.assign({},weight, {backgorundColor: props.mode==='dard'?'white':'dark'},{color: props.mode==='dard'?'grey':'light'} )}
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
          </div>
      </div>
    </>
  );
}