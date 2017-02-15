/*
*  Name: Pavan K. Kottapalli
*  Class: CS 1520 - PROGRAMMING LANGUAGES FOR WEB APPLICATIONS
*  Assignment: Assignment 2
*/

function add(){

	//var nform1 = document.getElementById()
	//var numTwo = document.forms["myForm"]["num-two"].value;
	//var addsum = document.getElementById("add-sum");

	var numOne = document.forms["myForm"]["numone"].value;
	var numTwo = document.forms["myForm"]["numtwo"].value;
	var addSum = document.getElementById("addsum");

	//window.alert(numOne);
	//window.alert(numTwo);

	if(isNaN(parseFloat(numOne)) && isNaN(parseFloat(numTwo))) {

		alert("Please enter valid numbers");

	}
	else if (isNaN(parseFloat(numTwo))) {

		alert("Please enter a valid Second number");

	} 
	else if (isNaN(parseFloat(numOne))) {

		alert("Please enter a valid First number.");	
	}
	else {
		var numOne1 = parseFloat(numOne);
		var numTwo2 = parseFloat(numTwo);
		addSum.innerHTML = "Your sum is: " + (numOne1 + numTwo2);
	}

	

/*	
	if(isNaN(parseFloat(numOne.value))) {

		alert("Please enter a valid First number");

	}
	if(isNaN(parseFloat(numTwo.value))) {

		alert("Please enter a valid Second number");

	}
	else {

	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;

	document.getElementById("demo").innerHTML = (one+two);
	//addSum.innerHTML = "Your sum is: " + (one+two);
}*/
}

