# Test de Libraries.io

## URL du logiciel

- [Site officiel de Libraries.io](https://libraries.io)

## Initialisation

### 1. Création d'un compte

Pour commencer à utiliser **Libraries.io**, il est nécessaire de créer un compte. Deux choix s'offrent à vous :

- **Suivi de projets sur GitHub** : Vous pouvez créer un workflow GitHub pour suivre automatiquement tous vos projets présents dans vos dépôts GitHub.
- **Utilisation de l'API** : Si vous souhaitez interroger l'API Libraries.io directement, vous devez aller dans les paramètres (**Settings**) de votre compte pour récupérer votre clé API. Notez que la limite de requêtes est de 60 requêtes par minute.

### 2. Suivi en local d'un projet

Pour suivre un projet localement, j'ai créé un script en **JavaScript** qui permet d'analyser le fichier `package.json` d'un projet Node.js et de questionner l'API **Libraries.io** pour obtenir des informations détaillées sur les dépendances.

Le script que j'ai utilisé s'appelle `librariesCheck.js` et est disponible dans le dossier du projet. **N'oubliez pas de renseigner votre clé API** dans le script avant de le lancer.

### 3. Installation et configuration

1. **Pré-requis** :

- Node.js installé sur votre machine
- Le module `node-fetch` pour faire des requêtes HTTP. Vous pouvez l'installer en exécutant la commande suivante dans votre terminal :

```bash
npm install node-fetch
```

2. **Script** : Placez le fichier `librariesCheck.js` dans le répertoire de votre projet, où se trouve également le fichier `package.json`.

3. **Configuration de la clé API** : Ouvrez le fichier `librariesCheck.js` et remplacez la variable `API_KEY` par votre clé API récupérée sur Libraries.io.

## Lancement
Pour exécuter le script, lancez simplement la commande suivante dans le terminal :

```bash
node librariesCheck.js
```

## Résultat

Le script analyse chaque dépendance de votre fichier `package.json` et interroge l'API Libraries.io pour obtenir des informations détaillées. Voici un exemple de résultat que vous verrez dans le terminal :

```bash
📦 Vérification de cookie-parser...
- Dernière version : 1.4.6
- License : MIT
- Nombre de contributeurs : N/A
- Dépôt : https://github.com/expressjs/cookie-parser
- Mises à jour récentes : 2021-11-16T17:32:19.335Z
- Popularité (Stars GitHub) : 1951
- SourceRank (qualité globale) : N/A
- Pas de dépendances trouvées
- Politique de sécurité en place : Non
- Pratiques de développement sécurisé (2FA) : Non

📦 Vérification de cors...
- Dernière version : 2.8.5
- License : MIT
- Nombre de contributeurs : N/A
- Dépôt : https://github.com/expressjs/cors
- Mises à jour récentes : 2018-11-04T21:00:13.277Z
- Popularité (Stars GitHub) : 6035
- SourceRank (qualité globale) : N/A
- Pas de dépendances trouvées
- Politique de sécurité en place : Non
- Pratiques de développement sécurisé (2FA) : Non

📦 Vérification de dotenv...
- Dernière version : 16.4.5
- License : BSD-2-Clause
- Nombre de contributeurs : N/A
- Dépôt : https://github.com/motdotla/dotenv
- Mises à jour récentes : 2024-02-20T03:33:38.563Z
- Popularité (Stars GitHub) : 18981
- SourceRank (qualité globale) : N/A
- Pas de dépendances trouvées
- Politique de sécurité en place : Non
- Pratiques de développement sécurisé (2FA) : Non
```

## Explication des résultats :

- **Dernière version** : Affiche la version la plus récente disponible pour chaque dépendance.
- **License** : Indique la licence sous laquelle la bibliothèque est distribuée (ex. MIT, BSD).
- **Nombre de contributeurs** : Nombre de contributeurs actifs sur le projet.
- **Dépôt** : Lien vers le dépôt du projet (GitHub, GitLab, etc.).
- **Mises à jour récentes** : Date de la dernière mise à jour publiée.
- **Popularité** : Nombre de "stars" sur GitHub, un indicateur de popularité.
- **SourceRank** : Une métrique qui évalue la qualité globale de la bibliothèque.
- **Dépendances** : Si la bibliothèque dépend d'autres paquets.
- **Politique de sécurité** : Indique si une politique de sécurité est en place pour la bibliothèque.
- **2FA** : Montre si les mainteneurs utilisent l'authentification à deux facteurs pour protéger la publication des nouvelles versions du paquet.

## Conclusion

J'ai pu constater que Libraries.io fournit des informations très détaillées sur les dépendances d'un projet, bien plus que d'autres outils comme dependencies.io. Cela inclut des informations précieuses sur la sécurité, les licences, et l'engagement communautaire autour des projets open source.
