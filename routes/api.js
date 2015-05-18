var express = require('express');
var router = express.Router();

/* GET all property listings. */
router.get('/properties', function(req, res) {
    var db = req.db;
    db.collection('properties').find().toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;