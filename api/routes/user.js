const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const md5= require('md5');
const jwt = require("jsonwebtoken");

const User = require('../models/user'); 


router.get('/',(req,res,next) => {
    User.find()
    .exec()
    .then(docs => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
      })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post('/signup',(req,res,next) => {
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name : req.body.name,
        email: req.body.email,
        age : req.body.age,
        phoneNo : req.body.phoneNo,
        password:md5(req.body.password)
    });
    user
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
              message: "User created"
            });
          })
        .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });
        }
    });
});

router.post("/login", (req, res, next) => {
    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Mail not found"
          });
          
        }
        if (md5(req.body.password) !== user[0].password) {
            return res.status(401).json({
              message: "Auth failed"
            });
          }
          if (md5(req.body.password) === user[0].password) {
            //generating token
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id
              },
              'token1'
            );
            return res.status(200).json({
              message: "Auth successful",
              token: token,
              userId : user._id,
              userName : user.name
            });
         }
         res.status(401).json({
            message: "Auth failed"
          });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
    });
});

router.get('/:userId',(req, res, next) => {
    const id = req.params.userId;
   User.findById(id)
   .exec()
   .then(doc => {
     console.log(doc);
     if(doc){
     res.status(200).json(doc);
     }else{
       res.status(404).json({
         message : 'No vaild data'
       });
     }
   })
   .catch(error => {
     console.log(error);
     res.status(500).json({error:error});
   });
 });

router.delete("/:userId", (req, res, next) => {
    User.remove({ _id: req.params.userId })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "User deleted"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

module.exports = router;