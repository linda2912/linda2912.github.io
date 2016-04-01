// Credits to Sem

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
    console.log(classListAvailable);
    console.log(mediaSupport);

    if (classListAvailable && mediaSupport) {

        window.addEventListener('keydown', function(evt) {
            if(keys[evt.keyCode]) play(null, keys[evt.keyCode]);
        });
        
        for (var i = 0; i < div.length; i += 1) {

            document.body.classList.add('js'); //by adding this class the p element will change to display:block
            var dataKey = div[i].querySelector('audio').getAttribute('data-key'); //pick all data-key's  
            var keyString = String.fromCharCode(dataKey); //converts Unicode values into characters.
            var button = document.createElement('button'); //create button element
            button.innerHTML = div[i].querySelector('p').innerHTML + ' (' + keyString + ')'; //add html into the button
            div[i].appendChild(button); //append an button element into all divs
            button.addEventListener(handler, play, false); //onclick exescute the play function
            audios[i].removeAttribute('controls'); //remove all the controls from the audio elements  
            keys[dataKey] = button; 
        }

        function play(evt, button) {
            
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