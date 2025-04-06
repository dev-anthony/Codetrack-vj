const User = require('../models/User');
const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const handleNewUser = async (req, res) => {
  const {email, pwd} = req.body;
  if (!email || !pwd) return res.status(400).send("Empty request");
  
  try {
    const duplicate = await User.findOne({email});
    if (duplicate) return res.status(409).send('user already exists');
    
    
    const hashedPwd = await bcrypt.hash(pwd, 10);
    const newUser = await admin.auth().createUser({
      email: email,
      password: pwd,
      emailVerified: false,
      disabled: false
    });
    
    const username = `@user_${newUser.uid.slice(0,5)}`;
    if (newUser){
      const user = await User.create({
        uid: newUser.uid,
        email: email,
        username: username,
        password: hashedPwd
      });
      if (user) {
        console.log(user);
        console.log('done');
        ghjiudd
      }
    } 
      res.status(200).send('user created succefully');
  } catch(err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
}

module.exports = { handleNewUser }