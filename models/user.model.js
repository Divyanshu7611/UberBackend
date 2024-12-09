const mongoose = require('moongose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            trim:true,
            minLength: [3,"First Name must be required at least 3 characters long"]
        },
        lastName:{
            type:String,
            required:true,
            trim:true,
            minLength: [3,"Last Name must be required at least 3 characters long"]
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        select:false
    },
    socketId:{
        type:String,
        default:null
    }
})
    

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })
    return token
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.static.hashPassword = async function (password) {
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model('user',userSchema);

module.exports = userModel