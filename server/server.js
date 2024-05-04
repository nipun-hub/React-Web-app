import express, { Router } from "express";
import cors from "cors";

const app = express();
const port = 3001;
const host = "127.0.0.1";

import mongoose from "mongoose";
import router from './routes/router.js';

app.use(cors());
app.use(express.json()); // Parse incoming JSON data

const uri = "mongodb+srv://nipunteekshana914:mFMfP72m@cluster0.8iwq5ps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB"); // More descriptive message
  } catch (error) {
    console.log("MongoDB Error:", error);
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Node server listening on port ${server.address().port}`);
});

app.use('/api', router);