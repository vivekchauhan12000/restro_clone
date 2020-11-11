const express = require('express')
const app = express()
const mongoose=require('mongoose')

const resto = require('./models/resto');
app.use(express.json())

const url="";
mongoose.connect('http://localhost:4500',{
  useNewUrlParser:true,useUnifiedTopology:true
},console.log("connected"))


const palacesRoutes = require('./routes/places-routes');
const meal = require('./routes/widgit');


app.use('/location',palacesRoutes);
//app.use('/widgit',meal);



app.listen(4000);
