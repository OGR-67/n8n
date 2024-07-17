# Inscription au tournois Pokémon et génération d'équipe aléatoire

L'utilisateur, via un formulaire, peut s'inscrire au tournois Pokémon en saisissant son pseudo. Il peut également saisir son nom d'équipe, mais celui-ci est optionnel. Si aucun nom d'équipe est saisi, un nom d'équipe en accord avec la composition de son groupe lui sera généré. Une fois les informations saisis, il sera enregistré dans une DB Airtable, son inscription sera notifiée sur un channel Slack et il sera redirigé vers un page HTML lui présentant son équipe, avec ses forces et ses faiblesses afin qu'il puisse se préparer au mieux au tournois.

## Stack utilisée

- **n8n Form Trigger**
- **HTTP Request** (pokebuild API)
- **OpenAI** (Message Model)
- **Slack** (Send message)
- **Core** (code, merge, respond to webhook)

## Détail du workflow

1. Le noeud **n8n Form Trigger** présente un formulaire pour la saisie du pseudo et éventuellement du nom de l'équipe.
2. Le noeud **HTTP Request** effectue une requête à l'API `pokebuildapi` sur un endpoint qui génère une équipe aléatoire.
3. Avec cette liste, on prompt **OpenAI** pour lui demander de généré un nom d'équipe ainsi que les forces et les faiblesses et de nous présenter le tout au format JSON.
4. Le noeud **Code** qui suit est utilisé pour parser le JSON reçu de **OpenAI** afin de pouvoir exploiter les données
5. Le workflow se sépare en 3 embranchements

- Un embranchement pour l'enregistrement dans différentes tables (players, teams, pokemons) dans **Airtable**
- Un embranchement pour la notification sur **Slack** (j'utilise ici un noed **Merge** pour attendre la fin de l'enregistrement sur **Slack** avant de poursuivre)
- Un embranchement qui va générer le HTML à renvoyer à l'utilisateur et lui renvoyer avec le noeud **Respond To Webhook**.

## Axes d'amélioration

En l'état, il n'y a aucune gestion des doublons dans la DB Airtable car cette dernière, a ma connaissance, n'a pas de gestion native des doublons. Avec un DB relationnelle classique on aurait pu exploiter l'erreur retourner pour notifier l'utilisateur de saisir un autre pseudo, ou refaire un call API si le doublon concerne un pokémon.
