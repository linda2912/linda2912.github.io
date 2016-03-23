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
	crash.classList.add('glow');
};

var clapFunction = function() {
	clapAudio.play();
	clapAudio.currentTime = 0;
	clap.classList.add('glow');
}

var hihatFunction = function() {
	hihatAudio.play();
	hihatAudio.currentTime = 0;
	hihat.classList.add('glow');
}

var snareFunction = function() {
	snareAudio.play();
	snareAudio.currentTime = 0;
	snare.classList.add('glow');
}

var rideFunction = function() {
	rideAudio.play();
	rideAudio.currentTime = 0;
	ride.classList.add('glow');
}

crash.addEventListener('animationend', function() {
	this.classList.remove('glow')
});

clap.addEventListener('animationend', function() {
	this.classList.remove('glow')
});

hihat.addEventListener('animationend', function() {
	this.classList.remove('glow')
});

snare.addEventListener('animationend', function() {
	this.classList.remove('glow')
});

ride.addEventListener('animationend', function() {
	this.classList.remove('glow')
});


crash.addEventListener('click', function() {
	crashFunction();
});

clap.addEventListener('click', function() {
	clapFunction();
});

hihat.addEventListener('click', function() {
	hihatFunction();
});

snare.addEventListener('click', function() {
	snareFunction();
});

ride.addEventListener('click', function() {
	rideFunction();
});


// var drumAudio = new Audio('sound/drum.wav');
// var guitarAudio = new Audio('sound/guitar.wav');
// var saxophoneAudio = new Audio('sound/saxophone.wav');
// var tromboneAudio = new Audio('sound/trombone.wav');
// var djembeAudio = new Audio('sound/djembe.mp3');