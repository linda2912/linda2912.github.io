##Funda Progressive Enhancement

Ik ga de volgende 13 features testen op mijn [Funda website](browserTechnologies/funda2.0)

1. Afbeeldingen
2. Custom fonts
3. Javascript (volledig)
4. Kleur
5. Breedband internet
6. Cookies
7. Javascript deels- Wifi hotspot
8. Javascript deels- Content blockers
9. Local Storage
10. CDN
11. Ad blockers (privacy)
12. Muis/Trackpad doet het niet
13. Css doet het niet

> 1. Afbeeldingen

* De plaatjes van de huizen tonen niet
* De icoontjes van de filters zijn niet zichtbaar maar zijn alsnog duidelijk door de tekst die wel zichtbaar is
* Het logo is niet meer zichtbaar, dit zou ik kunnen oplossen door middel van een inline svg 

> 2. Custom fonts

* Ik had gebruik gemaakt van het web font Lato en als fallback font sans-serif. Ik heb hier nog een fallback font toegevoegd ```Helvetica``` omdat dat lettertype bijna iedereen wel heeft en dichtbij het font Lato in de buurt komt.

> 3. Javascript (volledig)

* Als Javascript is uitgeschakelt, wordt er geen content getoond doordat de content wordt aangeroepen met Javascript..

> 4. Kleur

Met de tool Sim Daltonism heb ik getest of de website toegankelijk is voor kleurenblinden. 

* Met alle soorten kleurenblindheid is de website goed te gebruiken.

> 5. Breedband internet

* Bij de eerste keer zoeken toont hij geen loading img. Als de filters worden aangepast werkt de loading wel. 
* De website gaat niet kapot bij 50kb/s het laden van de plaatjes van de huizen duurt alleen heel lang. 

> 6. Cookies

> 7. JavaScript deels - Wifi hotspot

> 8. Javascript deels - Content blockers

> 9. Local Storage

> 10. CDN

> 11. Ad blockers (privacy)

> 12. Muis/Trackpad doet het niet

* De filter knoppen hebben geen focus omdat het geen buttons zijn. Als ik ze verander in buttons werken ze wel.

> 13. Css doet het niet

* zonder CSS gaat de hele website kapot. Het grootste probleem zijn de grote plaatjes. 
