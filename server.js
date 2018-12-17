const express = require('express')
const mongoose = require('mongoose')
const bodyPareser = require('body-parser')


const app = express();

//bodyParser middleware 
// for access to the body for ever 
app.use(bodyPareser.urlencoded({extended : false}))
app.use(bodyPareser.json())


//db config 
const db = require ('./config/keys').mongoURI;


const users = require('./routes/api/users');
const profiel = require('./routes/api/profiel');
// const admin = require('./routes/api/admin');
// const book = require('./routes/api/book');

// connect to mongodb
//then && catch is promise in js 
mongoose.connect(db)
  .then(() => console.log('mongoDB connected '))
.catch((err)=>console.log('Fail connected to database'))
app.get('/', (req,res)=>res.send('hello'));

//user routes
app.use('/api/users', users);
app.use('/api/profiel', profiel);
// app.use('/api/admin', admin);
// app.use('/api/book', book);



const port =  process.env.PORT || 5000;
app.listen(port , () => console.log(`server runing on port ${port}`))