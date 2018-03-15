'use strict';
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('../config')
const router = express.Router()
const jwtAuth = passport.authenticate('jwt', {session: false})
const { User } = require('../models/userModel')


router.use(jwtAuth)
router.use(bodyParser.json())

router.get('/:userId', (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      res.json(user.expenses)
    })
})

router.post('/:userId', (req, res) => {
  console.log(req.body.date);
  const expense = {
    amount: req.body.amount,
    category: req.body.category,
    location: req.body.location,
    createdAt: req.body.date,
  }

  User.findById(req.params.userId)
    .then(user => {
      user.expenses.push(expense)

      user.save(err => {
        if (err) {
          res.send(err)
        }
        res.json(user)
      })
    })
})


router.post('/filter/:userId', (req, res) => {
  User.findOne({_id: req.params.userId})
    .where('expenses.category')
    .equals('Coffee') 
    .then(user => {
      console.log(user.expenses);
    })
})

module.exports = {router}
