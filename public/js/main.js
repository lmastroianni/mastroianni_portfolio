//create jar, name jar, place string in jar
//var firstName = "Marco";

//alert is method(built in function in JS)
//alert("Hello" + firstName);

//modern JS
//alert(`Hello ${firstName}`);

//console.log("Hello" + firstName);

console.log("Java Script Linked Up");

(function(){
	"use strict";

	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu, false);

	/*window.onload = function() {
  var logo = document.getElementById('logo_middle')
  logo.style.marginTop = "25px";
	};

	// Timeline Reveal
	document.addEventListener('aos:in',  ({ detail }) => {
  	console.log('animated in', detail);
});*/


})();