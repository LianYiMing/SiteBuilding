//放div id
document.getElementById("intro-header").style.visibility = "hidden";

function fcintro-heade() {
	setTimeout(function() {
		document.getElementById("intro-header").style.visibility = "visible";
	}, 2000);
}


document.getElementById("container").style.visibility = "hidden";

function fccontainer() {
	setTimeout(function() {
		document.getElementById("container").style.visibility = "visible";
	}, 1000);
}


//放div class
divset = document.getElementsByClassName("container");
for (var i = 0; i < divset.length; i++) {
	divset[i].style.visibility = "hidden";
}

function fccontainer() {
	setTimeout(function() {
		divset = document.getElementsByClassName("container");
		for (var i = 0; i < divset.length; i++) divset[i].style.visibility = "visible";
	}, 1000)
}