import React from "react";

export default function TextForms() {

  return (
    <>
      <div className="mb-3">
        <label for="myBox mt-3" className="form-label">
        <h1> <strong>TEXTUTILS</strong></h1>
        </label>
        <textarea
          className="form-control mt-3"
          placeholder="Type Something"
          id="myBox"
          rows="12"
        >
        </textarea>
 
      </div>
    </>
  );
}