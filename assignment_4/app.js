const express = require('express')
const app = express()

const palacesRoutes = require('./routes/places-routes');
const meal = require('./routes/widgit');


app.use('/location',palacesRoutes);
app.use('/widgit',meal);



app.listen(4000);