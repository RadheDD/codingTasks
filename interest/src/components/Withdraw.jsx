import React, {useState} from "react";


function Withdraw(props) {
    const {title, symbol, value, setValue}= props;
    return (
      <div>
      <header>
        <h3>{title}({symbol})</h3>
      </header>
      <input value={value} onChange={(e) => {setValue(e.target.value)  
      }}/>
     </div>
    )
  }
  
  export default Withdraw;