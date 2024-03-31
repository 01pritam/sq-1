import express from 'express';
//require('dotenv').config()
const app = express();
const port=process.env.PORT||3001;
app.get('/',(req,res) =>{
    res.send("Hi this is here ");
})
app.listen(port, () =>
  console.log('App listening on port 3001!'),
);