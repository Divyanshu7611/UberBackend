const userModel = require('../models/user.model')
const {validationResult} = require('express-validator')
const userServices = require('../services/user.services')


module.exports.registerUser = async (req,res,next) =>{
 const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
  const {fullName, email, password} = req.body;

  const isAreadyExist = await userModel.findOne({email});
  if(isAreadyExist){
    return res.status(400).json({message: "User already exists"})
  }
  
  const hashedPassword = await userModel.hashPassword(password);

  const user = await userServices.createUser({
    firstName:fullName.firstName,
    lastName:fullName.lastName,
    email,
    password:hashedPassword
  })

  const token = await user.generateAuthToken();

  res.status(201).json({message: "User created successfully", token,user:{password:"",user}})

}