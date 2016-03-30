// Credits to Sem

(function () {
    'use strict';
    
    var audios = document.querySelectorAll('audio');
    var divs = document.querySelectorAll('div');
    var handler;
    var keys = {}
    
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
    
    window.addEventListener('keydown', function(evt) {
        if(keys[evt.keyCode]) play(null, keys[evt.keyCode]);
    });
    
    if ('ontouchstart' in document.documentElement) handler = 'touchstart';
    else handler = 'click';
    
    for (var i = 0; i < divs.length; i += 1) {
        var dataKey = divs[i].querySelector('audio').getAttribute('data-key');
        var keyString = String.fromCharCode(dataKey);
        var button = document.createElement('button');
        button.innerHTML = divs[i].querySelector('p').innerHTML + ' (' + keyString + ')';
        divs[i].appendChild(button);
        button.addEventListener(handler, play, false);
        audios[i].removeAttribute('controls');
        keys[dataKey] = button;

    }

    document.body.classList.add('js');
    
}());