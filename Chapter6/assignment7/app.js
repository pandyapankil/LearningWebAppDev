var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongodb = require('mongodb'),
    uri = 'mongodb://localhost:27017/assignment7';

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/links', function(req, res) {
    var title = req.body.title,
        link = req.body.link,
        doc = {
            "title": title,
            "link": link,
            "clicks": 0
        };
    console.log(title);
    mongodb.MongoClient.connect(uri, function(error, db) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        db.collection('rest').insert(doc, function(error, result) {
            if (error) {
                console.log(error);
                process.exit(1);
            }
        });
    });
});

app.get('/links', function(req, res) {
    mongodb.MongoClient.connect(uri, function(error, db) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        db.collection('rest').find().toArray(function(error, docs) {
            if (error) {
                console.log(error);
                process.exit(1);
            }
            //console.log(docs);
            console.log("[");
            docs.forEach(function(doc) {
                console.log("\t{");
                console.log("\t\t\"title\": \"" + doc.title + "\"");
                console.log("\t\t\"link\": \"" + doc.link + "\"");
                console.log("\t\t\"clicks\": " + doc.clicks);
                console.log("\t},");
            });
            console.log("]");
        });
    });

    app.get('/click/:title', function(req, res) {
        var title = req.params.title;
        mongodb.MongoClient.connect(uri, function(error, db) {
            if (error) {
                console.log(error);
                process.exit(1);
            }
            db.collection('rest').findAndModify({
                "title": title
            }, [], {
                $inc: {
                    clicks: 1
                }
            }, {
                new: true
            });
        });
    });
});

console.log("Server started on 3000");
app.listen(3000);