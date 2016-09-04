var express = require('express'),
    OK = 200

module.exports = (function() {

    var api = express.Router();

    function respond(err, data, res) {
        if(err) {
            console.log(err);
            res.status(err.status).json({ error: err })
        } else {
            res.json(data)
        }
    }

    api.get('/candy', function(req, res) {
        respond(null, { name: 'Candy', nickname: 'Bob', brother: 'Scott' }, res);
    });

    return api;

}());
