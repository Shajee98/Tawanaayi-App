//const express = require('express');
import express from 'express';
import mongoose from 'mongoose';
const app = express();
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt, { decode } from 'jsonwebtoken';
const accessTokenSecret = 'thegreatestSecret';
//import { authenticateJWT } from './authenticateJWT.js';
//import { jwtGenerator } from './jwtGenerator.js'
// var jwt = require('express-jwt');
import cors from 'cors';

//JWT AUTH
//Authenticate JWT

const authenticateJWT = (req, res, next) =>{
    var token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, accessTokenSecret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

//

app.use(bodyParser.json());

//CREATING SCHEMA

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    dob: {
        type:Date,
        required:true,
    },
    gender: {
        type:String,
        required:true,
    },
});

const User = mongoose.model("User", userSchema);

app.listen(3000, ()=>{
    console.log("server is running!");
});
app.use(cors())
app.options("*", cors());
//connecting mongoose
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    dbName: "userAuth"
},
(error)=>{
    if (!error){
        console.log("DB CONNECTED SUCCESSFULLY!");
    }
    else{
        console.log("ERROR CONNECTING DB");
    }
});



//ROUTES (HOME)
app.get("/", (req, res)=>{
    res.send("THE SERVER IS UP AND RUNNING!");
});

//ROUTE Register Request
app.post("/register", async (req, res)=>{
    
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        dob: req.body.dob,
        gender: req.body.gender
    })
    const user = await User.findOne({email: newUser.email});
    if (!user){
    await newUser.save();
    if (newUser){
        return res.json({"message":"User Created successfully"});
    }
    else{
        return res.json({"message":"ERROR OCCURED WHILE CREATING A USER"})
    }}
    else{
        return res.json({"message":"USER ALREADY EXISTS"})
    }
})
//Login
//,authenticateJWT
app.post("/login" , async (req,res)=>{
    let credentials = {
        email: req.body.email,
        password: req.body.password
    }
    const user = await User.findOne({email: credentials.email});
    if (!user){
        return res.json({"message":"Invalid credentials"});
    }
    else if (user && bcrypt.compareSync(credentials.password, user.password)){
            const accessToken = jwt.sign(credentials,accessTokenSecret,{expiresIn:"1h"});
            return res.json({
            "message":"Successfully Logged In!",
            accessToken
        });
    }
})

//Profile
app.get("/profile", authenticateJWT, function(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, accessTokenSecret, async function(err, decoded) {
        if (err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        // if everything good, save to request for use in other routes
        let details = {
            email : "",
            name : "",
            dob : ""
        }
        const user = await User.findOne({email: decoded.email});
        if (user){
            details.email = user.email;
            details.name = user.name;
            details.dob = user.dob;
            return res.json({"email":details.email, "name":details.name, "dob":details.dob});
        }
    })
  });