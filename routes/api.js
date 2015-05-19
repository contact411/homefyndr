var express = require('express');
var router = express.Router();

/* GET all property listings. */
router.get('/properties', function(req, res) {
    var db = req.db;
    db.collection('properties').find().toArray(function (err, items) {
        res.json(items);
    });
});

/* GET individual properties by _id */
router.get('/properties/id/:id', function(req, res) {
    var db = req.db;
    var ObjectID = require('mongoskin').ObjectID;
    var propID = req.params.id;
    db.collection('properties').findOne({_id: ObjectID.createFromHexString(propID)}, function (err, result) {
        if (err) {
          console.log(err);
        } else if (result) {
          console.log('Found: ', result);
          res.json(result);          
        } else {
          console.log('Property not found!');
        };
    });
});


module.exports = router;