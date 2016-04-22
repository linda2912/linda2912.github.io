##Real Time Web ~ week 2

####Structuur files

Ik wil beginnen met zo min mogelijk bestanden en mappen en deze dan zo 'natuurlijk' mogelijk te laten groeien. Op deze manier zullen de bestanden altijd makkelijk terug te vinden zijn en maak je geen ingewikkelde structuur. Ik vind zelf dat het project [meteor-boilerplate](https://github.com/Differential/meteor-boilerplate) erg goed gestructureerd is en heb daar een voorbeeld van genomen. 


```
soccer-app  
		└── both
				├── collections
						└── posts.js
				└──	 router.js
		└── client
				├── main
						├── main.css
						├── main.html
						└── main.js
				└── post
						└── post.html
				└── posts
						├── posts.html
						└── posts.js
		└── server
				└── main.js
```

#### Todo
* Verleden wedstrijden automatisch verwijderen.
* Wedstrijden automatische sorteren op data.

#### Wishlist
* Jezelf op een bepaalde plek in de opstelling zetten.

#### User test

######Testpersoon: Moeder

* Aanmelden ging goed
* Ging niet uit zichzelf aanmelden voor een wedstrijd omdat ze zich niet de doelgroep voelden. Evenals een wedstrijd toevoegen.
* Snapten de knoppen 4-4-2 en 3-4-3 niet. Toen de testpersoon er op klikte werd dat wel duidelijk.
* De knoppen aanpassen en verwijderen wist de testpersoon te vinden.
* Vindt de knoppen 'Ik doe mee!' en 'Ik doe toch niet mee!' erg verwarrend.
* Het is niet duidelijk dat bij Wedstrijd bewerken je eerst moet 'Opslaan' en dan pas 'Terug naar overzicht' moet gaan. 
