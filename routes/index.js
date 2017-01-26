var express = require('express');
var router = express.Router();
const query = require("../db/query");

/* GET home page. */
router.get('/', function(req, res, next) {
  query.findAllUsers().then(function(list) {
    res.json(list);
  });
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  query.findUserById(req.params.id).then(function(user) {
    res.json(user);
  });
});

router.post('/', function(req, res, next) {
  query.insertUser(req.body).then(function() {
    res.send('success');
  })
});

router.put('/:id', function(req, res, next) {
  query.updateUser(req.body, req.params.id).then(function() {
    res.send('success');
  })
});

router.delete('/:id', function(req, res, next) {
  let id = req.params.id;
  query.deleteUser(id).then(function() {
    res.send('success');
  });
});

module.exports = router;
