import React, {useState} from "react";

function Time(props) {
    const {title, value, setValue} = props;
    return (
     <div>
      <header>
        <h3>{title}({value})</h3>
      </header>
      <input type ="Range" min="0" max ="60" value ={value} onChange={(event) =>{setValue(event.target.value)}}/>
  
  
     </div>
    )
  }
  
  export default Time;