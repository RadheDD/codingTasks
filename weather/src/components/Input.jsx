import React from "react";


function Input(props){
    const{value, setValue}= props;
    
//A function is created to call data from API
//API URL and Key are stored in .env file    
    
    return(
    <div>
    <input className= "box-border hover:box-content" value={value} onChange={(e) => {setValue(e.target.value)  
      }}/>
        
     </div>
)
}
export default Input;
