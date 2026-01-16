import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000
 connectDB();  
 

   

app.use(express.json());
app.use(cookieParser());
 

const cors = require("cors");

app.use(cors({
  origin: [
    "https://mern-authentication-66zg.vercel.app",
    "https://mern-authentication-66zg-c6946achq-maidas-projects-455c8012.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

//API Endpoints
app.get('/',(req,res)=> res.send("API is Working."));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port,()=>console.log(` Server started on PORT:${port} `));
  