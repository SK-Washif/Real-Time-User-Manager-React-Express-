const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

const users =[
  {id:1, name:'washif', email:'washif@gmail.com'},
  {id:2, name:'fishal', email:'fishal@gmail.com'},
]

app.get('/users',(req, res)=>{
  res.send(users);
});

app.post('/users', (req, res) =>{
  console.log(req.body);
  const newUser = req.body
  newUser.id = users.length+1;
  users.push(newUser);
  res.send(newUser);
})

app.listen(port, (req, res)=>{
  console.log(`The port number is: ${port}`);

});