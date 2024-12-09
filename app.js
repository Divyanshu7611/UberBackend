const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const connectDb = require('./utilis/dbConnect');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

connectDb();

app.get('/',(res,req) => {
    res.send('Hello World')

})



module.exports = app;