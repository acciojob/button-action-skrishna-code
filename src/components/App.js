import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const[showPara,setshowPara]=useState(false);

  const handleClick=()=>{
    setshowPara(true);
  }

  return (
    <div className="App" id="main">
      // Do not alter the main div
      <p id="para" className={showPara ? "show":"hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>

      <button id="click" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default App
