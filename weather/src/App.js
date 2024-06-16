//Objective of this App is to show the weather condition at the location of the user.
import React, { useEffect, useState } from "react";
import FetchWeather from "./components/FetchWeather";
import Input from "./components/Input";

function App() {
  //Creating state to accept input from the user and provide output
  
  const[name, setName] = useState(" ");
  const[temp, setTemp]=useState(0);
  const[feelslike, setFeelslike]= useState(0);

//Creating useEffect function to re-render elements.
  useEffect(()=>{
    console.log(name);
  },[name]);
 
//infoWeather is an async function meant to retrieve weather information using the API*/
    async function infoWeather(name) { 
//Fetching data from the API      
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=27322fda3ffe4780824130412242305&q=${name}&aqi=no`);
      const result = await response.json();
      console.log(result);
      const location = result.location.name;
      console.log(location);
      const temperature = result.current.temp_c;
      console.log(temperature);
      const tempfeelslike = result.current.feelslike_c;
      console.log(tempfeelslike);
      setTemp(temperature);
      setFeelslike(tempfeelslike);
      }
        
//CallFunc to call infoWeather while passing the input(name of the city) accepted from the user
 function CallFunc(){ 
  infoWeather(name);
  return( 
  console.log(name) 
  )      
  }     
//Calling child component Input to accept name of the city and FetchWeather to present the data to the User    
  return (<div>
  <h3>Enter name of City to know its temperature</h3>  
  <Input value={name} setValue={setName}/>  
  <FetchWeather name={name} temp={temp} feelslike={feelslike} CallFunc={CallFunc}/>
  </div>);
}
export default App;
