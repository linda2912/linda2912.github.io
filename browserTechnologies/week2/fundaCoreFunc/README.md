## Opdracht 2.2 - Funda Core Functionaliteit

De Core Functionaliteit die ik heb opgepakt is het filteren van de zoekresultaten.

#### De problemen die ik ondervond waren
* Bij het uitzetten van de JavaScript toonde de website helemaal geen content doordat JavaScript alle elementen ```visible``` maakten.

*Oplossing*: Het filter formulier direct laten zien op de pagina

![zonder JavaScript](readMeImg/noJs.png) ![zonder JavaScript gefixed](readMeImg/noJsFix.png)

* Als de JavaScript uitstaan kan de gebruiker de gericht zoeken velden niet gebruiken doordat deze ```visible``` worden gemaakt met JavaScript

##### Oplossing: De gericht zoeken velden ```invisible``` maken met JavaScript zodat ze altijd getoond worden als er geen JavaScript is.

![toon alles zonder js](readMeImg/noJs2Fix)

* Als JavaScript uitstaat heeft de gebruiker ook niets aan de gericht zoeken buttons

##### Oplossing: De gericht zoeken buttons ```visible``` maken met JavaScript

![button verdwijnen zonder js](readMeImg/noJs3Fix)