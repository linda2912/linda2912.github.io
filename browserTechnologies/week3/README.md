## Lesweek 3 - Progressive Enhanced Browser Technolgies

#### Use case: Beatbox

[Online Demo](http://linda2912.github.io/browserTechnologies/week3/)

![](img/js.png)

##Keyboard fallback

```
<button></button>
```

Als de gebruiker geen gebruik kan maken van een keyboard, kan er ook op de buttons geklikt worden.

##JavaScript fallback

```
<audio></audio>
```

![](img/nojs.png)

JavaScript maakt de buttons aan voor ieder audio element. Zodra er geen JavaScript beschikbaar is worden er ook geen `<button>` elementen aangemaakt.

##ClassList && audio

```
if (classListAvailable && mediaSupport) {...}
```

Als er geen ClassList en/of audio wordt ondersteund wordt de JavaScript code ook niet uitgevoerd.




##JavaScript & CSS fallback

Zodra er geen JavaScript en geen CSS beschikbaar zijn blijven de functionaliteiten functioneel.

![nocss](img/nocss.png)

##Audio element fallback

Het audio element wordt niet ondersteund door IE8 en Opera Mini. Op deze browsers wordt er het alternatief aangeboden dat de gebruiker de sound kan downloaden en afspelen.

![](img/audio.png)

**Oplossing:**

```
<div>
	<p>Crash</p>
	<audio id="crashButton" src="beat/crash.mp3" type="audio/mp3" data-key="65" controls preload="auto" loop>
		<p>Your browser does not support the audio element. </p>
		<a href="beat/crash.mp3">Play Crash</a>
	</audio>
</div>
```
**IE8:**
![](img/ie8.png)



##Linear-gradient fallback

Linear-gradient wordt opgevangen in browsers die het niet ondersteunen door middel van een gewone ```background-color```

![](img/gradient.png)

```
background-color: #c0392b;
background: linear-gradient(to bottom right, #c0392b , #e74c3c);
```

![](img/gradientyes.png)![](img/gradientno.png)