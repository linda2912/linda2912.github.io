##Opdracht 1.1 - Breek het Web - Features

###1) Custom fonts

######Problemen Custom fonts

"It is very frustrating when loading up a website and seeing a mostly blank page because the fonts are still downloading. This is especially frustrating on a slow internet connection or on mobile."
*throwaway420* [(Bron)](https://news.ycombinator.com/item?id=7244465)

The issue is 
* custom fonts are awesome and we want to use them 
* custom fonts slow down our pages by being large additional resources.

#####Mogelijke oplossingen:
* only loading @font-face on large screens

![alt text](https://linda2912.github.io/browserTechnologies/onlyLargeScreens.png "Only for large screens")

[(bron)](https://css-tricks.com/preventing-the-performance-hit-from-custom-fonts/)


#####Mogelijke oplossing
*Using visibility: hidden while the fonts load.

![alt text](https://linda2912.github.io/browserTechnologies/visibleHidden.png "Ovisibility is hidden by onloaded fonts")

[(bron)](http://blog.typekit.com/2010/10/29/font-events-controlling-the-fout/)

#####~37% of top 300K sites are using web fonts as of early 2014

Tip: use web fonts, but audit your font usage periodically and try to keep it lean.

* Audit your font usage and keep it lean.
* Make sure font resources are optimized - see Google Web Fonts tricks.
* Instrument your font resources with Resource Timing: measure → optimize.
* Optimize the transfer latency and time of initial fetch for each font.
* Optimize your critical rendering path, eliminate unnecessary JS, etc.
* Spend some time playing with the Font Load Events API.

[(bron)](https://www.igvita.com/2014/01/31/optimizing-web-font-rendering-performance/)



#####Eigen ervaring

De website Innovation Studio is gemaakt met een Bootstrap layout. Bootstrap maakt veel gebruik van icon fonts. Een groot deel van de website breekt dan ook wanneer ik de webfonts uitschakel.

![alt text](https://linda2912.github.io/browserTechnologies/noWebFont.png "disabled webfont")
![alt text](https://linda2912.github.io/browserTechnologies/webFont.png "abled webfont")

[http://www.innovationstudio.ninja/]


###Muis/ Trackpad

