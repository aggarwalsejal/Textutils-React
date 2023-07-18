import React, { useState } from "react";

export default function TextForms(props) {
  //onchange function
  const handleOnChnage = (event) => {
    setText(event.target.value);
  };
    const [text, setText] = useState("");
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
          id="myBox"
          rows="12"
          onChange={handleOnChnage}
        >
           <p>{text.length>0?`${text}`: ""}</p>
        </textarea>
        
      </div>
    </>
  );
}