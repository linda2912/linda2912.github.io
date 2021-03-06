(function () {
    'use strict';
    
    var div = document.querySelectorAll('div');
    var audios = document.querySelectorAll('audio');
    var handler = 'click';
    var keys = {}
    var mediaSupport = false;
    var classListAvailable = document.querySelector('body').classList;
    var audioAvailable = document.createElement("audio");

    if (audioAvailable.play) {
        var mediaSupport = true;
    } 

    if (classListAvailable && mediaSupport) { //check if classlist and audio is supported

        window.addEventListener('keydown', function(event) { //credits to Sem for the code below
            if(keys[event.keyCode]) play(null, keys[event.keyCode]);
        });
        
        for (var i = 0; i < div.length; i += 1) { 

            document.body.classList.add('js'); //by adding this class the p element will change to display:block
            
            var button = document.createElement('button'); //create button element
            var dataKey = div[i].querySelector('audio').getAttribute('data-key'); //pick all data-key's  
            var keyString = String.fromCharCode(dataKey); //converts unicode values into characters.
            
            button.innerHTML = div[i].querySelector('p').innerHTML + ' (' + keyString + ')'; //add html into the button
            div[i].appendChild(button); //append an button element into all divs
            button.addEventListener(handler, play, false); //onclick execute the play function
            audios[i].removeAttribute('controls'); //remove all the controls from the audio elements  
            keys[dataKey] = button;

            
        }

        function play(event, button) {
            
            if(this) button = this; 
            
            var audio = button.parentNode.querySelector('audio'); 
            var style = button.classList;

            if(audio.paused) {
                
                audio.play();
                audio.currentTime = 0;
                style.add('glow');
                style.add('press');
                return;
            } 
            audio.pause();
            style.remove('glow');
            style.remove('press');
        };
    }

}());