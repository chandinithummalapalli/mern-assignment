/*import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const express = require("express");
const mongoose= require("mongoose");
const cors=require("cors");
const app=express();
const userRoutes= require("./routes/userRoutes");
app.use("/api/users",userRoutes);
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));
app.get("/",(req,res)=>{
    res.send("Backend is running");
});
app.listen(5000,()=>{
    console.log(`Server running on port 5000`);
});*/
/*require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes=require("./routes/userRoutes");
const app = express();
app.use(express.json());
app.use("/api/user",userRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {console.log("MongoDB connected successfully");})
  .catch((err) =>{ console.error("MongoDB connection error:", err.message);});
app.get("/", (req, res) => {
  res.send("Backend is running");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});*/

/*require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes=require("./routes/userRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
const userRoutes=require("./routes/userRoutes");
app.use("/api/users",userRoutes);
// Test route


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {console.error("MongoDB connection error:",err.message);});

// Routes
//app.use("/api/users",userRoutes);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Backend is running");
});
app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});*/


/*require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

const app = express();
const cors=require("cors");
// Middleware
app.use(express.json()); 
app.use("/api/users", userRoutes);
app.use(cors())
// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));