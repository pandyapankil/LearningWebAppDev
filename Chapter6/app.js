var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var redis = require('redis');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
var client = redis.createClient();


app.get('/stats', function(req, res) {
    var wins = 0;
    var looses = 0;
    client.get("wins", function(err, reply) {
        wins = reply;
        client.get("looses", function(err, reply) {
            looses = reply;
            res.json({
                wins: wins,
                looses: looses
            });
        });
    });

    //res.json({wins:wins,looses:looses})

});


app.delete('/stats', function(req, res) {

    client.set("wins", 0);
    client.set("looses", 0);
    res.json({
        wins: 0,
        looses: 0
    });

    //console.log(wins+"-"+looses);
});




app.post('/flip', function(req, res) {

    var query1 = req.body.call;

    var wins = 0;
    var looses = 0;
    var rand = Math.random();
    var winner = "";
    var result = "";
    if (rand < 0.5) {
        winner = "heads";
    } else {
        winner = "tails";
    }

    if (winner === query1) {
        result = "wins";
        client.incr("wins", redis.print);
    } else {
        result = "looses";
        client.incr("looses", redis.print);
    }
    res.json({
        result: result
    });
});
console.log("Server started on 3000");
app.listen(3000);