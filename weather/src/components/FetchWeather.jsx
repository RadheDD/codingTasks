import React from "react";
import {Card} from 'semantic-ui-react'



function FetchWeather(props){
const{name, temp, feelslike, CallFunc}=props;
return(
    <div>
    <button onClick ={CallFunc}>Submit
</button>
    <Card>
        <Card.Content>
            <Card.Header className="header">City Name:{name}</Card.Header>
            <p>Current Temperature Deg C: {temp}</p>
            <p>Feels like Deg C: {feelslike}</p> 
             
        </Card.Content>
    </Card>
    </div>
)
}
export default FetchWeather;

