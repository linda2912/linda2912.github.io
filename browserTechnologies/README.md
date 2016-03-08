##Opdracht 1.1 - Breek het Web - Features

###Custom fonts

#####Problemen die ze veroorzaken onderzoek

"It is very frustrating when loading up a website and seeing a mostly blank page because the fonts are still downloading. This is especially frustrating on a slow internet connection or on mobile."
[https://news.ycombinator.com/item?id=7244465]

The issue is 
1) custom fonts are awesome and we want to use them 
2) custom fonts slow down our pages by being large additional resources.

Oplossingen:
* only loading @font-face on large screens

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
[https://css-tricks.com/preventing-the-performance-hit-from-custom-fonts/]


Using visibility: hidden while the fonts load.

<script type="text/javascript" src="http://use.typekit.com/xxxxxxx.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<style type="text/css">
  .wf-loading .blog-title,
  .wf-loading .post-title {
    /* Hide the blog title and post titles while web fonts are loading */
    visibility: hidden;
  }
</style>

[http://blog.typekit.com/2010/10/29/font-events-controlling-the-fout/]

~37% of top 300K sites are using web fonts as of early 2014

Tip: use web fonts, but audit your font usage periodically and try to keep it lean.

* Audit your font usage and keep it lean.
* Make sure font resources are optimized - see Google Web Fonts tricks.
* Instrument your font resources with Resource Timing: measure → optimize.
* Optimize the transfer latency and time of initial fetch for each font.
* Optimize your critical rendering path, eliminate unnecessary JS, etc.
* Spend some time playing with the Font Load Events API.

[https://www.igvita.com/2014/01/31/optimizing-web-font-rendering-performance/]



#####Eigen ervaring

De website Innovation Studio is gemaakt met een Bootstrap layout. Bootstrap maakt veel gebruik van icon fonts. Een groot deel van de website breekt dan ook wanneer ik de webfonts uitschakel.

![alt text](https://linda2912.github.io/browserTechnologies/noWebFont.png "disabled webfont")
![alt text](https://linda2912.github.io/browserTechnologies/webFont.png "abled webfont")

[http://www.innovationstudio.ninja/]


###Muis/ Trackpad

