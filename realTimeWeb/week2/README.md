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

* account username
* aanwezig
* wedstrijd verwijderen
* aanwezigen tellen
* verleden wedstrijden automatisch verwijderen
* automatische gesorteerd op data