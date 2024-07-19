# Exécution d'un script dépendant d'une bibliothèque externe

Ce workflow n'a pas vraiment de but si ce n'est de faire exécuter un script. Le noeud code permet déjà d'executer du code mais est limité aux bibiothèques préinstallées avec n8n. L'idée est donc de faire exécuter un script qui dépend d'une bibliothèque externe, le tout dans un conteneur Docker. Je vais executer du code Javascript mais on pourrait très bien faire executer dans n'importe quel language, ce qui rend n8n encore plus versatile.

## Stack utilisée

- **Docker**
- **NodeJS + fs-extra** (Node est présent de base dans l'image n8n)
- Le noeud **Exécuter un script**
