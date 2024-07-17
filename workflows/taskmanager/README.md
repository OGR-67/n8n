# Gestionnaire de tâches via Gmail

L'idée est d'utiliser la boite de réception Gmail pour recevoir des tâches. Elles seront ensuite inscrite dans Airtable et pourront être gérées via une vue kanban. L'utilisateur sera également notifié sur un channel slack.

## Stack utilisée

- **Noeud Gmail** (Gmail Trigger, Mark as read)
- **Airtable** (create record)
- **Slack** (send message)
- **Core** (filter, format date, set, summarize)

## Détail du workflow

1. Le noeud **Gmail Trigger** se déclenche toute les heures et renvoie les nouveaux messages (non lus)
2. Le noeud **Filter** filtre les mails pour ne garder que ceux dont l'objet commence par `task:`
3. Un nouveau noeud **Gmail** est utilisé pour marquer comme lu les emails concernés par le workflow.
4. Le noeud **Format date** formate la date dans un format lisible par l'homme.
5. Le noeud **Set** extrait les champs utiles (il met en forme également le nom de la tâche en retirant `task:` et les espaces vides avant et après) et adapte les clés pour le noeud suivant.
6. Le noeud **Airtable** crée les enregistrements dans la DB.
7. Le noeud **Summarize** compte combien de tâches ont été extraites de la boite de réception.
8. On notifie l'utilisateur avec le noeud **Slack** qu'il a reçu `n` tâches.
