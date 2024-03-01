function suma(){
	var dateElement=document.getElementById("terminal");
	dateElement.value=dateElement.value + "+";
}

function resta(){
	var dateElement=document.getElementById("terminal");
	dateElement.value=dateElement.value + "-";
}

function multiplicar(){
	var dateElement=document.getElementById("terminal");
	dateElement.value=dateElement.value + "*";
}

function dividir(){
	var dateElement=document.getElementById("terminal");
	dateElement.value=dateElement.value + "/";
}

function elevarAlCuadrado(){
	var dateElement=document.getElementById("terminal");
	dateElement.value=dateElement.value + "**2";
}

function raizCuadrada(){
	var dateElement=document.getElementById("terminal");
        dateElement.value=dateElement.value + "**0.5";
}


function potenciar(){
        var dateElement=document.getElementById("terminal");
        dateElement.value=dateElement.value + "**";
}

function calcular(){
	var dateElement=document.getElementById("terminal");
        dateElement.value= eval(dateElement.value);
}
