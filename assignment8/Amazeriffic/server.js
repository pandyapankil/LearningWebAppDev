var express = require("express"),
    http = require("http"),
    // import the mongoose library
    mongoose = require("mongoose"),
    app = express(),
    server=http.createServer(app);
	io = require("socket.io").listen(server);

app.use(express.static(__dirname + "/client"));
app.use(express.bodyParser());

// connect to the amazeriffic data store in mongo
mongoose.connect('mongodb://localhost/amazeriffic');

// This is our mongoose model for todos
var ToDoSchema = mongoose.Schema({
    description: String,
    tags: [ String ]
});

var ToDo = mongoose.model("ToDo", ToDoSchema);


io.on("connection", function (socket) {
  console.log("Connected!!");

  socket.on("disconnect", function () {
    console.log("Bye bye!!");
  });
  
  socket.on("addTodo", function (content) {    
    console.log(content); 
    var newTodo = new ToDo({
      "description": content.description,
      "tags": content.tags
    });

    newTodo.save(function (err, result) {
      if (err !== null) {
        console.log(err);
        socket.emit("Error", err);
      } else {
        ToDo.find({}, function (err, result) {
          if (err !== null) {
            socket.emit("Error", err);
            return;
          }
          io.emit('addTodo',result);
        });
      }
    });
  });
});


app.get("/todos.json", function (req, res) {
    ToDo.find({}, function (err, toDos) {
	res.json(toDos);
    });
});

/*app.post("/todos", function (req, res) {
    console.log(req.body);
    var newToDo = new ToDo({"description":req.body.description, "tags":req.body.tags});
    newToDo.save(function (err, result) {
	if (err !== null) {
	    // the element did not get saved!
	    console.log(err);
	    res.send("ERROR");
	} else {
	    // our client expects *all* of the todo items to be returned, so we'll do
	    // an additional request to maintain compatibility
	    ToDo.find({}, function (err, result) {
		if (err !== null) {
		    // the element did not get saved!
		    res.send("ERROR");
		}
		res.json(result);
	    });
	}
    });
});*/

server.listen(3000);