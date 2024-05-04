import { response } from "express";
import User from "./models/model.js";
import { Db } from "mongodb";

// get all yuser data
export const getUsers = (req, res, next) => {
  const { email, type } = req.body;
  if (type) {
    User.findOne({ email: email })
      .then((response) => {
        if (response) {
          res.json({ massage: "success", response });
        } else {
          res.json({ massage: "not user" });
        }
      })
      .catch((err) => {
        res.json({ massage: "error" });
      });
  } else {
    User.find()
      .then((response) => {
        res.json({ response });
      })
      .catch((error) => {
        res.json({ error });
      });
  }
};

// check in data in database
export const checkIt = (req, res, next) => {
  const { fname, lname, email, pass } = req.body;

  try {
    if (pass) {
      User.findOne({
        $and: [{ email }, { pass }],
      })
        .then((response) => {
          if (response) {
            res.json({ massage: "success", reusalt: true });
          } else {
            res.json({ massage: "success", reusalt: false });
          }
        })
        .catch((error) => {
          res.json({ massage: "error" });
        });
    } else {
      User.findOne({
        $or: [{ email }, { $and: [{ fname }, { lname }] }],
      })
        .then((response) => {
          if (response) {
            res.json({ massage: "success", reusalt: true });
          } else {
            res.json({ massage: "success", reusalt: false });
          }
        })
        .catch((error) => {
          res.json({ massage: "error" });
        });
    }

    //   if (response) {
    //     res.json({ response });
    //   } else {
    //     res.json({ massage: "success", reusalt: false });
    //   }
  } catch (error) {
    res.json({ massage: "error" });
  }
  // User.findOne({
  //   $or: [{ email }, { $and: [{ fname }, { lname }] }],
  // })
  //   .then((response) => {
  //     if (response) {
  //       res.json({ massage: "success", reusalt: true });
  //     } else {
  //       res.json({ massage: "success", reusalt: false });
  //     }
  //   })
  //   .catch((error) => {
  //     res.json({ massage: "error" });
  //   });
};

// add a new data
export const addUser = (req, res, next) => {
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    pass: req.body.pass,
  });
  user
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

// Update a data
export const updateUser = (req, res, next) => {
  const { fname, lname, email, pass } = req.body;
  User.updateOne(
    { email: email },
    {
      $set: {
        fname: fname,
        lname: lname,
        pass: pass,
      },
    }
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

// delete a data
export const deleteUser = (req, res, next) => {
  const email = req.body.email;
  User.deleteOne({ email: email })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};
