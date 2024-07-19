# Web scraping et enregistrement dans une DB locale

Le but de ce workflow est d'utiliser une commande externe pour scrapper une page web et récupérer des noms d'articles et les liens associés. On sauvegarde ensuite ces données dans une base de données en local.

## Stack utilisée

- **Docker**
- **NodeJS + axios + cheerio** (Node est présent de base dans l'image n8n)
- Le noeud **Execute command**
- **PostgreSQL**

## Détail du workflow

1. Le workflow s'execute manuellement
2. Le noeud **Execute command** s'occupe du scrapping et renvoie les données formatées dans une string JSON
3. Un noeud **Code** parse cette chaine de caractères pour pouvoir exploiter les données
4. Le noeud **Postgres** s'occupe de l'enregistrement des données dans la DB. Il crée également la table si elle n'existe pas.
5. Un noeud **If** nous permet de gérer si l'enregistrement dans la DB s'est bien passé ou non:

- Si oui, on récupère toute la table
- Si non, on throw une erreur pour déclencher le workflow d'erreur associé
