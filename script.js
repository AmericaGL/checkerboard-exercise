// Your JS goes here
window.onload = function(){
window.setTimeout(function(){document.location.reload(true);}, 2000);

addElement();
addBigDiv();
// addMore();

};//window onload
function addColors(){

var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);
var newColor = randomDiv.style.backgroundColor= 'rgb(' + r + "," + g + "," + b +')';
return newColor;
}


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

for (var i=1; i<=63; i++) {
	var randomDiv = addElement();
	var randomColor= addColors();
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