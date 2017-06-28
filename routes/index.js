var express = require('express');
var router = express.Router();
var Activity = require('../models/activity_model');

/* GET home page. */
router.get('/', function(req, res, next) {
    Activity.forge()
            .fetchAll({withRelated: ['athlete']})
            .then(function(activitis) {
                console.log(activitis.toJSON());
            });
    res.render('index', { title: 'Express' });
});

module.exports = router;
