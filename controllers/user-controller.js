const { User } = require("../models");

const userController = {
  // C 
  // create new user
  postNewUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // R
  // read users from database
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        if(!dbUserData) {
          res.status(404).json({ message: "No user found with specified ID!" });
          return;
        }
        res.json(dbUserData)
      }
        )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // U
  // update user information
  updateUserById({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
    .then((dbUserData) => {
      if(!dbUserData) {
        res.status(404).json({ message: "No user found with specified ID!" });
        return;
      }
      res.json(dbUserData)
    }
      )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },
  // D
  // delete user from database
  deleteUserById({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
    .then((dbUserData) => {
      if(!dbUserData) {
        res.status(404).json({ message: "No user found with specified ID!" });
        return;
      }
      res.json(dbUserData)
    }
      )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  }
};

module.exports = userController;
