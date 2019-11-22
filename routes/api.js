const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
global.fetch = fetch;

const axios = require('axios');
const User = require('../models/user')
const Favorite = require('../models/favorite');

router.get('/', (req, res) => {
  res.json({type: 'success', message: 'You accessed the protected api routes'})
});

//get a quote
router.get('/quote', (req, res) => {
  axios.get('https://api.kanye.rest')
    .then(response => {
      axios.get(`http://yoda-api.appspot.com/api/v1/yodish?text=${response.data.quote}`)
        .then(resQuote => {
          res.json(resQuote.data.yodish)
        }).catch(err => {
          res.json(response.data.quote)
        })
    }).catch(err => {
      console.log(err)
    })
})

// get faves associated with user
router.get('/favorites/:id', (req, res) => {
  User.findById(req.params.id).populate('favorites').exec((err, user) => {
    if (err) res.json(err)
    res.json(user)
  })
})

//post faves
router.post('/favorites/:id', (req, res) => {
  Favorite.create({
    quote: req.body.quote,
    photo: req.body.photo
  }, (err, favorite) => {
    console.log(favorite)
    if (err) req.json(err)
    User.findById(req.params.id, (err, user) => {
      if (err) res.json(err)
      user.favorites.push(favorite._id)
      user.save()
      res.json(favorite)
    })
  })
})

module.exports = router;