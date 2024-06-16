import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data , setData]= useState({});
  const [customMessage, setCustomMessage]= useState({});//States to store fetched data

  useEffect(() => {
    fetchData(); //Fetch Data each time the components load
  }, []);

  //Function to fetch data from the server
  const fetchData = async() =>{
    try{
      /*Sends Get Request to
      'http://localhost:6000//api/data and api/message'*/
      const response = await axios.get('/api/data');
      const responseA = await axios.get('/api/message');
      setData(response.data); //Update state with fetched data
      setCustomMessage(responseA.data); 
    } catch(error){
      console.log('Error fetching data:', error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        {/*Display the message or Loading.. in case data not fetched */}
        <h1>{data.message|| 'Loading..'}</h1>
        <h2>{customMessage.message || 'Loading..'}</h2>

      </header>
    </div>
  );
}

export default App;
