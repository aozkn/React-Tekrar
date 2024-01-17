import React, { useState } from "react";

const KeyboardClipboard = () => {
  const [content, setContent] = useState("");
const handleCopy = (e)=>{
e.target.style="3px solid red"
e.target.className="border border-danger border-4 form-control"
e.target.style.fontSize="30px"
}
  const handleKeyDown = (e)=>{
    
if(e.keyCode >=48 && e.keyCode <=57){
  alert("Please Dont Enter A Number")
  e.preventDefault()
}

  }
  return (
    <div className="container mt-4">
      <h2 className="text-center">KeyboardClipboard</h2>
      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          // e.target.value = e.target.value.toLocaleUpperCase()
          setContent(e.target.value.toLocaleUpperCase());
        }}
        onKeyDown={handleKeyDown}
        value={content}
      />

      <div className="mt-4">
        <h3>Copied Content</h3>
        <p>{content.toLocaleLowerCase()}</p>
      </div>


      <textarea 
      onCopy={handleCopy} className="form-control" name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default KeyboardClipboard;
