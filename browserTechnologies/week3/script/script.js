var buttons = document.getElementById('buttonBox').classList.remove('invisible');
var audioControls = document.getElementById('audioControls').classList.add('invisible');

var crash = document.getElementById('crashButton');
var clap = document.getElementById('clapButton');
var hihat = document.getElementById('hihatButton');
var snare = document.getElementById('snareButton');
var ride = document.getElementById('rideButton');

var crashAudio = new Audio('beat/crash.wav');
var clapAudio = new Audio('beat/clap.wav');
var hihatAudio = new Audio('beat/hihat.wav');
var snareAudio = new Audio('beat/snare.wav');
var rideAudio = new Audio('beat/ride.wav');


window.onkeydown = function(event) {
	press = event.keyCode;
	switch (press) {
	   	case (65): //a
	       	crashFunction();
	    	break;
		
		case (83): //s
		   	clapFunction();
		   	break;

		case (68): //d
		   	hihatFunction();
		   	break;

		case (70): //f
		  	snareFunction();
		   	break;

		case (71): //g
		   	rideFunction();
		   	break;

	}
};

var crashFunction = function() {
	crashAudio.play();
	crashAudio.currentTime = 0;
};

var clapFunction = function() {
	clapAudio.play();
	clapAudio.currentTime = 0;
}

var hihatFunction = function() {
	hihatAudio.play();
	hihatAudio.currentTime = 0;
}
var snareFunction = function() {
	snareAudio.play();
	snareAudio.currentTime = 0;
}

var rideFunction = function() {
	rideAudio.play();
	rideAudio.currentTime = 0;
}

crash.onclick = function() {
	crashFunction();
};

clap.onclick = function() {
	clapFunction();
};

hihat.onclick = function() {
	hihatFunction();
	
};

snare.onclick = function() {
	snareFunction();
};

ride.onclick = function() {
	rideFunction();
};


// var drumAudio = new Audio('sound/drum.wav');
// var guitarAudio = new Audio('sound/guitar.wav');
// var saxophoneAudio = new Audio('sound/saxophone.wav');
// var tromboneAudio = new Audio('sound/trombone.wav');
// var djembeAudio = new Audio('sound/djembe.mp3');