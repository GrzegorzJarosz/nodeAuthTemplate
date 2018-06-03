const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

/*---------------------------------mongoose--------------------------------------------------------------*/
//db connect
mongoose.connect(process.env.database);
//on connect
mongoose.connection.on('connected', () => {
  console.log(`connected to db ${process.env.database}`);
})

/*-----------------------------------------------------------------------------------------------*/

const app = express();

/*-----------------------------------------------------------------------------------------------*/
//routes
const userRoutes = require('./api/routes/users');

/*-----------------------------------------------------------------------------------------------*/

const port = process.env.PORT || 3000;

/*-----------------------------------------------------------------------------------------------*/

//morgan
app.use(morgan('dev'));

//bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors
app.use(cors());

/*-----------------------------------------------------------------------------------------------*/
//static
app.use(express.static(path.join(__dirname, 'public')));

/*-----------------------------------------------------------------------------------------------*/

//use routes
app.use('/users', userRoutes);

/*-----------------------------------------------------------------------------------------------*/
//index route
app.get('/', (req,res) => {
  res.send('hello');
});

/*----------------------serv-------------------------------------------------------------------------*/
app.listen(port, () => {
  console.log(`server started on port ${port}`);
})
