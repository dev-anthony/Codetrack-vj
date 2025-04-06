const User = require('../models/User');
const admin = require('firebase-admin');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const handleLogin = async (req, res) => {
  const {email, pwd} = req.body;
  if (!email || !pwd) return res.status(400).send('Empty request');
  
  try {
    const foundUser = await User.findOne({email});
    if (!foundUser) return res.status(402).send('user not found');
    const password = foundUser.password;
    const decoded = await bcrypt.compare(pwd, password);
    
    if (decoded) {
      res.status(200).send('login successful');
    } else {
      res.status(401).send('incorrect password');
    }
  } catch(err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
}

const decodedToken = await admin.auth().verifyIdtoken(token);
    const uid = decodedToken.uid;
    let user = await User.findOne({uid});
    
