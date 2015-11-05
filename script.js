// Your JS goes here
window.onload = function(){
addElement();
// addMore();

};//window onload

//function addElement(){
//you need to create a div
//add style to the div
function addElement(){
var newDiv = document.createElement("div");
// newDiv.style.backgroundColor = "red";
newDiv.style.width="11.1%";
newDiv.style.height="width";
//you can change height to equat to width and it will always be a square
newDiv.style.paddingBottom= "11.1%";
newDiv.style.float="left";

return newDiv;
} 
//call local var by calling its function return
//calling function addElement return answer which become new div which 
//becomes document.createElement("div")
//you need to multiply the div 64 times by adding an array
for (var i=1; i<=63; i++) {
	var randomDiv = addElement();
	//adds local var to the outside but not one times but many times
	//function addElement returns newDiv which is document.createElement("div");

	if( i % 2 === 0 ){
		randomDiv.style.backgroundColor="red";
	}
	else{
		randomDiv.style.backgroundColor="black";
	}
	//you can define a function outside of for loop to attach it to the body 
	//whatever happens it will be assign this variable. You don't want this 
	//to be in the function addElement though in other body to body(not good).
	document.body.appendChild(randomDiv);
		

}

// function test()
// var a = "b";
// return a;
// }

// var c = test();
// var c = a
// var c = "b"

//you need to multiply the div 64 times by adding an array
//
//
//  var newDiv=document.createElement("div");
//  document.body.appendChild(newDiv);
//  for (var i = 1;
//    i <= 64; i++) {
//    	if( i % 2 === 0){
//    		newDiv.style.backgroundColor = "red";
//    		 newDiv.style.width="300px";
//    		 newDiv.style.height="300px";
//    	}
//    	else
//    		newDiv.style.backgroundColor="black";
//    		 newDiv.style.width="300px";
//    		 newDiv.style.height="300px";
// }
// // }