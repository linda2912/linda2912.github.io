// Credits to Sem

(function () {
    'use strict';
    
    var div = document.querySelectorAll('div');
    var audio = document.querySelectorAll('audio');
    var handler = 'click';
    var keys = {}
    
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
        audio[i].removeAttribute('controls'); //remove all the controls from the audio elements
        
    }

    function play(evt, button) {
        
        if(this) button = this;
        
        var audio = button.parentNode.querySelector('audio');

        if(audio.paused) {
            
            audio.play();
            audio.currentTime = 0;
            button.classList.add('glow');
            button.classList.add('press');
            return;
        } 
        
        audio.pause();
        button.classList.remove('glow');
        button.classList.remove('press');
    };
    
    
}());