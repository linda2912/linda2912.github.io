##Opdracht 1.1 - Breek het Web - Features

###1) Custom fonts

######Problemen Custom fonts

"It is very frustrating when loading up a website and seeing a mostly blank page because the fonts are still downloading. This is especially frustrating on a slow internet connection or on mobile."
*throwaway420* [(Bron)](https://news.ycombinator.com/item?id=7244465)

The issue is 
* custom fonts are awesome and we want to use them 
* custom fonts slow down our pages by being large additional resources.

~37% of top 300K sites are using web fonts as of early 2014 [(bron)](https://www.igvita.com/2014/01/31/optimizing-web-font-rendering-performance/)

##### > Mogelijke oplossingen:
* only loading @font-face on large screens [(bron)](https://css-tricks.com/preventing-the-performance-hit-from-custom-fonts/) ![alt text](https://linda2912.github.io/browserTechnologies/img/onlyLargeScreens.png "Only for large screens")


```bash
@font-face {
  font-family: 'Dr Sugiyama';
  font-style: normal;
  font-weight: 400;
  src: local("Dr Sugiyama Regular"), local("DrSugiyama-Regular"), url(http://themes.googleusercontent.com/static/fonts/drsugiyama/v2/rq_8251Ifx6dE1Mq7bUM6brIa-7acMAeDBVuclsi6Gc.woff) format("woff");
}

body {
  font-family: sans-serif;
}
@media (min-width: 1000px) {
  body {
    font-family: 'Dr Sugiyama', sans-serif;
  }
}
```


* Using visibility: hidden while the fonts load. [(bron)](http://blog.typekit.com/2010/10/29/font-events-controlling-the-fout/) ![alt text](https://linda2912.github.io/browserTechnologies/img/visibleHidden.png "Ovisibility is hidden by onloaded fonts")


* Use web fonts, but audit your font usage periodically and try to keep it lean. [(bron)](https://www.igvita.com/2014/01/31/optimizing-web-font-rendering-performance/)

1. Audit your font usage and keep it lean.
2. Make sure font resources are optimized - see Google Web Fonts tricks.
3. Instrument your font resources with Resource Timing: measure → optimize.
4. Optimize the transfer latency and time of initial fetch for each font.
5. Optimize your critical rendering path, eliminate unnecessary JS, etc.
6. Spend some time playing with the Font Load Events API.



######Eigen ervaring

* De website Innovation Studio is gemaakt met een Bootstrap layout. Bootstrap maakt veel gebruik van icon fonts. Een groot deel van de website breekt dan ook wanneer ik de webfonts uitschakel. [(Bron)](http://www.innovationstudio.ninja/) ![alt text](https://linda2912.github.io/browserTechnologies/img/noWebFont.png "disabled webfont") ![alt text](https://linda2912.github.io/browserTechnologies/img/webFont.png "abled webfont")

* Op deze website vallen de icons wel weg maar als je er overheen hovered is zichtbaar wat voor icoon het is. [(Bron)](https://bootstrapbay.com/blog/built-with-bootstrap/) ![alt text](https://linda2912.github.io/browserTechnologies/img/mouseOver.png "mouse over event")

#####Mogelijke oplossingen

* gebruik svg's ipv webicons
* Gebruik geen letters als benaming voor de icons maar voorzich sprekende namen zodat de gebruiks kan zien waar het op slaat.


###2) Muis/Trackpad

######Websites testen zonder muis/trackpad
* [Whatsapp](https://web.whatsapp.com/): De website van Whatsapp is niet te gebruiken zonder muis of trackpad. Het is namelijk niet mogelijk om een chat te openen. Ook wordt er totaal niet aangegeven wat het focus punt is.





