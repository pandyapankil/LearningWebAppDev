var express = require('express');
var bodyParser=require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

var wins=0;
var looses=0;


app.get('/stats',function(req,res){

  var data={"wins":wins,"looses":looses};
  res.json(JSON.stringify(data));

});

app.post('/flip',function(req,res){

  var query1=req.body.call;

  var rand=Math.random();
  var winner="";
  var result="";
  if(rand<0.5)
  {
    winner="head";
  }
  else
  {
    winner="tail";
  }

  if(winner===query1)
  {
    wins++;
  result="win";
  }
  else
  {
    looses++;
  result="lose";
  }
  var data={"result":result};
  res.json(JSON.stringify(data));

});

app.listen(3000);
