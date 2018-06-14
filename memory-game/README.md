# Développement d'un jeu de mémoire (par groupe de 4)

## Présentation lundi 18/06

## But : retrouver toutes les paires en un minimum de temps.

### Exemple :
![Exemple memory game](http://cdn.shopify.com/s/files/1/0322/7017/products/SLM-225_B_large.jpg?v=1396120490)

### Principe du jeu :
* 20 cases (5x4)
* si une paire n’est pas trouvée, les photos se retournent
* si une paire est trouvée, les photos restent affichées
* un timer pour savoir en combien de temps le participant a terminé le jeu
* le jeu est inactif au départ. Un bouton “Start” active le jeu et le timer
* à la fin du jeu, on affiche le temps et un formulaire qui permet au participant de valider sa participation, avec :
  * la civilité
  * le nom
  * le prénom
  * l’adresse e-mail
  * le temps
* vérification du formulaire en JS (tous les champs sont obligatoires)


### Spécifications
* développer la page en HTML/CSS
* programmer le jeu en JS natif
* PHP + MySQLI ou PDO pour le bonus de saisie en DB
* libre choix des images qui doivent être en rapport avec le thème choisi

### Chaque groupe doit rendre :
* les user stories (Trello)
* le dossier du projet (avec wireframes)
* le lien GitHub du code
* le code sera commenté


### Bonus :
* ajout d'un compteur de clics (avec affichage du nombre à la fin du jeu)
* validation du formulaire en Ajax avec récapitulatif des données saisies à la place du formulaire et saisie des données en DB (vous ajouterez le diagramme UML au dossier)
* sécurisation des données saisies en DB
* limiter la participation (saisie en DB) à 2 par adresse e-mail : un message indiquera que le participant à déjà joué 2 fois
