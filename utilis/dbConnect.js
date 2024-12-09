const mongoose = require('mongoose')

function connectDb(){


    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log('Connected to database')
    }).catch((err) => {
        console.log('Error connecting to database',err)
    }
    )
}

module.exports = connectDb;

