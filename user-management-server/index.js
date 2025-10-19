const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());

const users =[
  {id:1, name:'washif', email:'washif@gmail.com'},
  {id:2, name:'fishal', email:'fishal@gmail.com'},
]

app.get('/users',(req, res)=>{
  res.send(users);
});

app.listen(port, (req, res)=>{
  console.log(`The port number is: ${port}`);

});