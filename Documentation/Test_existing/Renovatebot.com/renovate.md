# Installation et Test de Renovate

## Activation Native via GitHub

Renovate est intégré nativement à GitHub et peut être activé facilement via la fonctionnalité Code Security :

1. Allez sur votre dépôt GitHub.
2. Cliquez sur l'onglet "Security" en haut de la page.
3. Dans le menu de gauche, cliquez sur "Code scanning".
4. Faites défiler jusqu'à la section "Dependabot".
5. Activez "Dependabot security updates" et "Dependabot version updates".
6. GitHub utilisera automatiquement Renovate pour gérer les mises à jour de dépendances.

Cette méthode est recommandée pour la plupart des utilisateurs car elle est simple à configurer et entièrement gérée par GitHub.

## Installation en Locale

### Prérequis

- Node.js (version 14 ou supérieure)
- npm (généralement installé avec Node.js)
- Un compte GitHub
- Un token d'accès personnel GitHub avec les permissions nécessaires

### Installation

1. Installez Renovate globalement via npm :

   ```bash
   npm install -g renovate
   ```

2. Vérifiez l'installation :

   ```bash
   renovate --version
   ```

### Configuration

1. Créez un fichier `config.js` à la racine de votre projet :

   ```javascript
   module.exports = {
     endpoint: "https://api.github.com/",
     token: "votre_token_github_personnel",
     platform: "github",
     onboardingConfig: {
       extends: ["config:base"],
     },
     repositories: ["votre_nom_utilisateur/votre_repo"],
   };
   ```

   Remplacez `votre_token_github_personnel` par votre token GitHub et `votre_nom_utilisateur/votre_repo` par le chemin de votre dépôt.

### Test en Mode Dry-Run

1. Exécutez Renovate en mode dry-run :

   ```bash
   renovate --dry-run
   ```

2. Analysez la sortie pour voir quelles actions Renovate aurait entreprises.

### Exécution Réelle

Une fois satisfait des résultats du dry-run, vous pouvez exécuter Renovate pour qu'il crée réellement des Pull Requests :

```bash
renovate
```

## Ressources Supplémentaires

- [Documentation officielle de Renovate](https://docs.renovatebot.com/)
- [Options de configuration Renovate](https://docs.renovatebot.com/configuration-options/)
- [GitHub CLI pour la gestion des tokens](https://cli.github.com/)
- [Documentation GitHub sur Dependabot](https://docs.github.com/en/code-security/dependabot)
