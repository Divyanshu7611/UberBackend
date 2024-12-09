const userModel = require('../models/user.model')

module.exports.createUser = async({firstName,lastName,email,password}) => {
  if(!firstName || !email || !password){
    throw new Error('Missing required fields')
  }
  console.log(firstName, lastName, email, password)
  const user = userModel.create({
    fullName: {
      firstName,
      lastName
    },
    email,
    password
  })
  return user;
}


