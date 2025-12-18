/*const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try{
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);}
  catch(err){
  res.status(400).json({error:err.message});}
  //res.json({ message: "User registered" });
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;*/


/*const express = require("express");
const router = express.Router();
const User = require("../models/User");
// CREATE USER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
});
router.get("/",(req,res)=>{
  res.json({message:"User route working"});
});

module.exports = router;*/


const express = require("express");
const router = express.Router();

// Test GET route
router.get("/", (req, res) => {
  res.json({ message: "User route working" });
});

// POST route (IMPORTANT)
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    message: "User registered successfully",
    data: { name, email }
  });
});

module.exports = router;