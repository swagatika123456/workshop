var express = require("express");
var app =express();
let fs = require("fs");
var cors = require("cors");
app.use(express.static("root")); 
app.use(express.json());


//let data = [{"title":"Alina","desc":"Mohanty"}];
let data = fs.readFileSync("./posts.json");
let json = JSON.parse(data);
console.log(json);



//json.push({"title":"sahi","desc":"hai"});
//fs.writeFileSync(".//posts.json",JSON.stringify(json,null,2));

//API through get method
//for more parameteres
//app.get("/post/:num/:abc/:xyz",(req,res)
app.get("/post",(req,res)=>{
	// json.push({"title":"sahi","desc":"hai"});
	 res.send(json);
	//res.send(req.params);
	//res.send(req.query);
})




//post method
app.post("/post",(req,res)=>{
	json.push(req.body);
// 	json.push({"title":"sahi","desc":"hai"});
 fs.writeFileSync(".//posts.json",JSON.stringify(json,null,2));
 req.send(json);
 })





app.listen(3000,()=>{console.log("listening on port 3000")});
