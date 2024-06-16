import React, {useState} from "react";

function CalculatedAmount(props) {
    
    
    return (
     <div>
      <header>
        <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 border box" onClick={props.calculationFunc}>Click Me to find out you {props.title}({props.symbol})
        <i class="fa-solid fa-calculator"> </i>  
        </button>
        <h3>Your earnings are {parseInt(props.value)}</h3>
      </header>
        
  
     </div>
    )
  }
  
  export default CalculatedAmount;