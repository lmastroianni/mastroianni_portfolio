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

window.onscroll = function() {myFunction()};

// Get the header
var mainHeader = document.getElementById("mainHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    mainHeader.classList.add("sticky");
  } else {
    mainHeader.classList.remove("sticky");
  }
}


})();