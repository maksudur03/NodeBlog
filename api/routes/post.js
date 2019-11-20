const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const checkAuth = require('../middleware/check-auth');


const Post = require('../models/post');

router.get('/mypost/:userId',(req, res, next) => {
  Post.find({userId : req.params.userId})
  .exec()
  .then(docs => {
    console.log(docs);
    res.status(200).json(docs);
  })
  .catch( error => {
    console.log(error);
    res.status(500).json({
      error : error
    });
    
  });
});

router.get('/',(req,res,next) => {
    Post.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs); 
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


router.post('/',(req,res,next) => {
    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
        heading:req.body.heading,
        content:req.body.content,
        userId : req.body.userId,
        userName : req.body.userName,
        rating : 0,
        ratingCount : 0
    });
    post
    .save()
    .then(result => {
        console.log(result);
    res.status(200).json({
        message:'Posted',
        createdPost:result
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});


router.get('/:postId',(req,res,next)=> {
    const id = req.params.postId;
    Post.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
});


router.patch('/:postId',(req,res,next) => {
    const id = req.params.postId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Post.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });


router.delete('/:postId',(req,res,next) => {
    const id = req.params.postId;
  Post.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get('/mypost/:userId',(req, res, next) => {
  Post.find({userId : req.params.userId})
  .exec()
  .then(docs => {
    console.log(docs);
    res.status(200).json(docs);
  })
  .catch( error => {
    console.log(error);
    res.status(500).json({
      error : error
    });
    
  });
});

module.exports = router;