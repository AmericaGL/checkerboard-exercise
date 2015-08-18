// Your JS goes here
window.onload = function(){
addElement();
addBigDiv();
// addMore();

};//window onload


function addElement(){
var newBottomDiv = document.createElement("div");
//newDiv.style.background="linear-gradient(135deg,red,red 60%,blue)";
newBottomDiv.style.width="11.1%";
newBottomDiv.style.height="11.1%";
newBottomDiv.style.float="left";
newBottomDiv.style.paddingBottom="11.1%";
//newBottomDiv.style.backgroundColor="linear-gradient(45deg, #ed1c24, #fcee21)";

return newBottomDiv;
} 
//call local var by calling its function return
//calling function addElement return answer which become new div which 
//becomes document.createElement("div")
for (var i=1; i<=63; i++) {
	var randomDiv = addElement();

//	var megaDiv = addBigDiv();
	//adds local var to the outside but not one times but many times
	//function addElement returns newDiv which is document.createElement("div");

	 if( i % 2 === 0 ){
	 	randomDiv.style.backgroundColor="red";
	 	randomDiv.style.opacity=".9";
	 	randomDiv.style.zIndex="";
	 }
	 else{
	 	randomDiv.style.backgroundColor="black";
	 	randomDiv.style.opacity=".9";
	 	randomDiv.style.zIndex="";
	 }
	//you can define a function outside of for loop to attach it to the body 
	//whatever happens it will be assign this variable. You don't want this 
	//to be in the function addElement though in other body to body(not good).
	document.body.appendChild(randomDiv);
	randomDiv.style.position="relative";

}


 var newDiv=document.createElement("div");
 document.body.appendChild(newDiv);
 for (var i = 1;
   i <= 63; i++) {
   	if( i > 63 === 0){
   		
   	}
   	else
   		newDiv.style.background="linear-gradient(45deg, #ed1c24, #fcee21)";
   		newDiv.style.position="relative";
   		 newDiv.style.width="100%";
   		 newDiv.style.height="100%";
   		 newDiv.style.paddingBottom="78%";
   		 newDiv.style.opacity=".8";
   		 newDiv.style.zIndex="";
   		
}
// }