import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import contraller from "./contraller.js";

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/getUsers", (req, res) => {
  contraller.getUsers((req, res, next) => {
    res.send();
  });
});

app.get("/checkIt", (req, res) => {
  contraller.checkIt((req, res, next) => {
    res.send();
  });
});

app.post("/createUser", (req, res) => {
  contraller.addUser(req.body, (callback) => {
    res.send();
  });
});

app.post("/updateUser", (req, res) => {
  contraller.updateUser(req.body, (callback) => {
    res.send(callback);
  });
});

app.post("/deleteUser", (req, res) => {
  contraller.deleteUser(req.body, (callback) => {
    res.send(callback);
  });
});



export default app;
