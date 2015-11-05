// Your JS goes here
window.onload = function(){
addElement();
addColors();
// addMore();

};//window onload

//function addElement(){
//you need to create a div
//add style to the div
function addElement(){
var newDiv = document.createElement("div");
newDiv.style.width="11.1%";
newDiv.style.height="11.1%";
newDiv.style.float="left";
newDiv.style.paddingBottom="11.1%";
return newDiv;
}

function addColors(){

var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);
var newColor = randomDiv.style.backgroundColor= 'rgb(' + r + "," + g + "," + b +')';
return newColor;
}

 
//call local var by calling its function return
//calling function addElement return answer which become new div which 
//becomes document.createElement("div")
for (var i=1; i<=63; i++) {
	var randomDiv = addElement();
	var randomColor = addColors();
	//adds local var to the outside but not one times but many times
	//function addElement returns newDiv which is document.createElement("div");

	//you can define a function outside of for loop to attach it to the body 
	//whatever happens it will be assign this variable. You don't want this 
	//to be in the function addElement though in other body to body(not good).
	document.body.appendChild(randomDiv);

		

}

//Math floor help round the number 1.6 downward to it's nearest integer
//math random returns a 