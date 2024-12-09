const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const connectDb = require('./utilis/dbConnect');
const userRoutes = require('./routes/user.route')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

connectDb();

app.get('/',(req,res) => {
    res.send('App Start Successfully')

})

app.use('/user',userRoutes);



module.exports = app;