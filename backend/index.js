const express = require("express");
const dotenv = require("dotenv");
const mdb = require("mongoose");
const Signup = require("./models/signupSchema");
dotenv.config();


const app = express();
app.use(express.json())
const PORT = 3001;

// console.log(process.env.MONGODB_URL);

mdb
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connection sucessfull");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/", (req, res) => {
    console.log("first")
  res.send("<h1>HIII</h1>");
});

app.post("/signup", (req, res) => {
  try {
    const {firstName,lastName,email,password,phoneNumber} = req.body
    
    const newSignup = new Signup({
      firstName: "Aneesh",
      lastName: "RNS",
      email: "rnsaneesh15@gmail.com",
      password: "welcome",
      mobile: 7358409822,
    })
    newSignup.save();
    console.log("Signup successful");
    res.status(201).json({ message: "Signup Successful", isSignup: true });
  } catch (err) {
    console.log(err);
    res.status(201).json({ message: "Signup unsuccessful", isSignup: false });
  }
});

app.listen(PORT, () => {
  console.log("Server started successfully");
});