## Lesweek 3 - Progressive Enhanced Browser Technolgies

#### Use case: Beatbox

[Online Demo](http://linda2912.github.io/browserTechnologies/week3/)

![](img/js.png)

##Keyboard fallback

```
<button></button>
```

##JavaScript fallback

``` 
<audio></audio> 
```

![](img/nojs.png)

JavaScript maakt de buttons zichtbaar en de audio elementen onzichtbaar.

```
var buttons = document.getElementById('buttonBox').classList.remove('invisible');
var audioControls = document.getElementById('audioControls').classList.add('invisible');`
```
##CSS & JavaScript fallback

![nocss](img/nocss.png)

##Audio element fallback

![](img/audio.png)

```
<audio controls>
	<source src="beat/crash.wav" type="audio/wav">
	<p>Your browser does not support the audio element. </p>
	<a href="beat/crash.mp3">Play Crash</a>
</audio>
```

##Audio types fallback

![wav](img/wav.png)
![wav](img/mp3.png)

```
<audio controls>
	<source src="beat/crash.wav" type="audio/wav">
	<source src="beat/crash.mp3" type="audio/mp3">
</audio>
```


##Linear-gradient fallback

![](img/gradient.png)

```
background-color: #c0392b;
background: linear-gradient(to bottom right, #c0392b , #e74c3c);
```

![](img/gradientyes.png)![](img/gradientno.png)