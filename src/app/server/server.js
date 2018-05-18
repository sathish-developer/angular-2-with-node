var express=require("express");
var app=express();
var path=require("path");
var bodyparser=require("body-parser");

var port=3000;

//view engine setup

app.set("views",path.join(__dirname,"../views"));
app.set("view engine","ejs");
app.engine("html",require("ejs").renderFile);

app.use(express.static(path.join(__dirname,'client')));

//bodyParser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
})

app.post("/save",function(req,res)
{
console.log("value from angular received"+JSON.stringify(req.body));
res.send(req.body);
});


app.listen(port,function()
{
    console.log("server running on port number :"+port);
});