const express = require('express');
const path = require('path');  
const bcrypt = require('bcrypt'); 
const signupModel = require("../model/b_signup"); 

const router = express.Router();


router.post('/signup', async (req, res) => {
    console.log(req.body);
    const { name, email,mobilenumber,pincode,address,city,state,password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10); 

        const newUser = new signupModel({ 
            name: name,
            email,
            mobilenumber,
            pincode,
            address,
            city,
            state,
            password: hashedPassword 
        });

        await newUser.save(); 
        res.status(201).send("User signed up successfully!"); 
    } catch (error) {
        res.status(500).send("Error signing up user: " + error.message); 
    }
});


// Route to handle user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await signupModel.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found. Please sign up.");
    }

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid password.");
    }

    // If passwords match, authentication is successful
    res.status(200).send("Login successful!");
  } catch (error) {
    res.status(500).send("Error during login: " + error.message);
  }
});



module.exports = router;