import React, {useState} from "react";

function Deposit(props) {
    const {title, symbol, value, setValue}= props;
    return (
      <div>
      <header>
        <h3>{title}({symbol})</h3>
      </header>
      <input class= "box-border hover:box-content" value={value} onChange={(e) => {setValue(e.target.value)  
      }}/>
     </div>
      )
  }
  
  export default Deposit;