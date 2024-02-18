var mytext;
var result;
var number=10;

function creap(){
	var textElement = document.getElementById("mytext");
	mytext=textElement.value;
	console.log(mytext);
	result="";
	for (var i=1; i<number;i++){
		result += '<p>' + mytext + '</p>'
	}
	console.log(result);
	document.getElementByid("parrafos").innerHTML=result;
}
