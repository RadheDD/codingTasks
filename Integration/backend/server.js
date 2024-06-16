const express = require('express');
const cors = require('cors');

const app = express();

//Define the port number for the server
const PORT = process.env.PORT || 6000;

//Enable cross origin Resource Sharing
app.use(cors());

//Define the route to retrieve the message
app.get('/api/data', (req, res) => {
const data ={message:'Hello from the backend!'};
res.json(data); //Send data as a response
});

app.get('/api/message', (req, res) => {
const message ={message:'May all living entities be happy'};
res.json(message); //Send data as a response
    });
    

//Start the server
app.listen(PORT, ()=>{
console.log(`Server is running on port ${PORT}`);
});
