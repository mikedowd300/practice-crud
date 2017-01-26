var express = require('express');
var router = express.Router();

const query = require("../db/query");

/* GET home page. */
router.post('/login', function(req, res, next) {
  query //This calls a premade DB query. You just need to be
  //aware of what it is returning.
    .findUserByEmail(req.body.email)
    .then(function(user) {
      if(user){
        console.log('found');
        res.json(user);//Only One res fires
      } else {
        console.log('not found');
        res.send('errror');//Only One res fires
      }
    })
});

router.post('/signin', function(req, res, next) {
  res.json(req.body);
});

module.exports = router;
