const User = require('../models/User')
const router = require('express').Router()

router.get('/users/signin', (req, res) => {
  res.render('users/signin')
})

router.get('/users/signup', (req, res) => {
  res.render('users/signup')
})

// Para recibir los datos 

router.post('/users/signup', async (req, res) => { 
  const {name, email, password, confirm_password} = req.body;
  const errors = [];
  if( name <= 0){
    errors.push({text: 'Please type a valid name'})
  }
  if( password != confirm_password){
    errors.push({text: 'Passwords do not match'})
  }
  if(password.length < 4){
    errors.push({text: 'Passwords must be at least 4 characters'})
  }
  if(errors.length > 0) {
    res.render('users/signup', {errors, name, email, password, confirm_password})
  }else{
    const emailUser = await User.findOne({email: email})
    if ( emailUser){

      req.flash('error_msg', 'The email is already in use')
      res.redirect('/users/signup')

    }
    const newUser = new User({name, email, password})
    newUser.password = await newUser.encryptPassword(password)
    await newUser.save()
    req.flash('success_msg', 'You are registered')
    res.redirect('/users/signin')
  }
})

module.exports = router