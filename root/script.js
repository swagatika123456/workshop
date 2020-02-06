//declaration
let divcard = document.createElement("div");
let divcontainer = document.createElement("div");
let form = document.createElement("form");
let str = "";
//setAttribute
form.setAttribute("action","#");
divcard.setAttribute("class","card");
divcontainer.setAttribute("class","container");
//str change
str = '<input type="text"><input type="text"><input type="submit" class = "btn">';
form.innerHTML = str;
//apend
divcard.append(divcontainer);
divcontainer.append(form);
document.body.append(divcard);



//API
fetch("http://localhost:3000/post")
.then((res)=>res.json())
.then((data)=>{
	             console.log(data);
                 makelist(data);
              });




//function
let divlist = document.createElement("div");
function makelist(data) {
        str = "";
	data.forEach((ele)=>{
		str+="<p>" + ele["title"] + "=>" +ele["desc"];
		str +="</p>";
	})
	divlist.innerHTML = str;
	document.body.append(divlist);
	}




let myheaders = new Headers();
myheaders.append("Content-Type","application/json");
form.onsubmit = (evt) =>{
	//evt.preventDefault();
 	fetch("http://localhost:3000/post",{
 		method:"post",
 		body:JSON.stringify({
 			"title":form.children[0].value,
 			"desc":form.children[1].value
 		}),
 		headers:myheaders

 	})
		.then((res)=>res.json())
		.then((data)=>{
	          console.log(data);
              makelist(data);
           });

}