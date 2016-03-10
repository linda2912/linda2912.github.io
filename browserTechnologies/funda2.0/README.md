##Progressive Enhancement toepassen op de Funda website

Ik ga de volgende 13 features testen op mijn [Funda website](http://linda2912.github.io/browserTechnologies/funda2.0/#home)
```
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
14. Screen reader
```
``` 1 Afbeeldingen ```

* De plaatjes van de huizen tonen niet
* De icoontjes van de filters zijn niet zichtbaar maar zijn alsnog duidelijk door de tekst die wel zichtbaar is
* Het logo is niet meer zichtbaar

**Aangepast:**
* Funda logo naar inline SVG

**Aanbeveling:**
* Alle iconen inline svg maken (maar dit is helaas niet mogelijk bij het gebruik van de plugin Transparancy dus dan zou hier een andere plugin voor gebruikt moeten worden)

``` 2 Custom fonts ```

* Ik had gebruik gemaakt van het web font Lato en als fallback font sans-serif. 

**Aangepast:**
* Ik heb nog een fallback font toegevoegd ```Helvetica``` omdat dat lettertype bijna iedereen wel heeft en dichtbij het font Lato in de buurt komt.

``` 3 Javascript (volledig) ```

* Als Javascript is uitgeschakelt, wordt er geen content getoond doordat de content wordt aangeroepen met Javascript..

**Aanbeveling:**
* De werking omdraaien door die sections standaard te tonen en met JavaScript deze onzichtbaar te maken zodat de gebruiker altijd alles te zien krijgt als JavaScript uit staat.

``` 4 Kleur ```

Met de tool Sim Daltonism heb ik getest of de website toegankelijk is voor kleurenblinden. 

* Met alle soorten kleurenblindheid is de website goed te gebruiken.

``` 5 Breedband internet ```

* Bij de eerste keer zoeken toont de pagina geen loading image doordat de loader in het article Results zit en deze op dat moment nog niet zichtbaar is op de pagina. Als er eenmaal gezocht is, is de loader wel te zien.
* De website gaat niet kapot bij 50kb/s het laden van de plaatjes van de huizen duurt alleen heel lang. 

**Aangepast:**
* Ik heb de loader buiten de article results gezet zodat hij ook aangeroepen kan worden als er nog geen resultaten zijn.

``` 6 Cookies
7 JavaScript deels - Wifi hotspot
8 Javascript deels - Content blockers
9 Local Storage
10 CDN
11 Ad blockers (privacy)
```
Al deze features heb ik helaas niet kunnen testen omdat ze geen invloed hebben op mijn website.

``` 12 Muis/Trackpad doet het niet ```

* De filter knoppen hebben geen focus omdat het geen buttons zijn. Als ik ze verander in buttons werken ze wel.

**Aangepast:**
* buttons gemaakt van de figures

``` 13 Css doet het niet ```

Zonder CSS gaat de hele website kapot. 
* Alle icons worden heel groot getoond
* de zoek section wordt twee keer getoond

**Aanbevelingen**
* De SVG's inline zetten en daar een grootte aan meegeven
* Niet de sections via javaScript in de main willen kopiëren

``` 14 Screen reader ```

Niet alle velden hebben een goede beschrijving voor screen readers

**Aangepast:**
* Alt attributen aangepast

