<img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="English Flag" width="40"/>

# Contributing to Lookout

🎉 **Thank you for considering contributing to Lookout!** 🎉

We are excited to collaborate with contributors of all levels to help make Lookout the best tool for managing dependencies. This guide outlines the process for contributing to the project, whether you're reporting an issue, suggesting a new feature, or contributing code.

---

## Table of Contents

1. [How to Contribute](#how-to-contribute)
2. [Reporting Issues](#reporting-issues)
3. [Submitting Changes](#submitting-changes)
4. [Code Style](#code-style)
5. [Setting Up the Development Environment](#setting-up-the-development-environment)
6. [License](#license)

---

## How to Contribute

We welcome various types of contributions, including:

- **Reporting bugs** 🐛
- **Suggesting new features** 💡
- **Improving documentation** 📝
- **Fixing bugs or adding new features** 🚀

Here are the steps to get started:

1. Fork the repository by clicking the "Fork" button on GitHub.
2. Clone your fork to your local machine using:

```
git clone https://github.com/RonanPors/lookout.git
```
3. Create a new branch from dev for your feature or bugfix:
```
git checkout -b feature-name dev
```
4. Make your changes, and commit them with a descriptive message:
```
git commit -m "Ajout de la fonctionnalité/fix : description"
```
5. Push your changes to your fork:
```
git push origin feature-name
```
6. Open a Pull Request (PR) on the original repository base from dev branch.

## Reporting Issues

When you encounter an issue with Lookout, please check if it has already been reported by searching the Issues section. If it hasn’t, you can create a new issue by following these steps:

1.	Click the “New Issue” button on the repository’s Issues page.
2.	Choose the appropriate template: Bug Report or Feature Request.
3.	Provide a clear and concise description of the issue. If it’s a bug, include steps to reproduce the problem and the expected vs. actual behavior.

## Submitting Changes

We accept contributions through Pull Requests (PR). Before submitting a PR, please ensure:

1.	You are working on the latest version of the code by pulling changes from the dev branch:
```
git pull origin dev
```
2.	Your code passes all tests and adheres to the coding guidelines outlined below.
3.	You have provided meaningful commit messages and comments, explaining what the code is doing.

To submit a Pull Request:

1.	Go to the Pull Requests section of the repository.
2.	Click “New Pull Request” and select your branch.
3.	Provide a clear title and description for your changes.
4.	Submit the PR and wait for reviews.

Once your PR is reviewed and approved, it will be merged into the dev branch for futur stables releases from main.

Code Style

To keep the codebase clean and maintainable, please follow these style guidelines:

•	Use 2 spaces for indentation (not tabs).
•	Follow the JavaScript/TypeScript best practices (since Lookout is primarily Node.js-based).
•	Use meaningful variable and function names.
•	Ensure that all code is well-commented, especially complex or non-obvious logic.
•	Use ESLint and Prettier to ensure code consistency.

Run the following command to format and lint your code:
```
npm run lint
```
## Setting Up the Development Environment

1. Clone the repository:
```
git clone https://github.com/RonanPors/lookout.git
```
2. Navigate to the project folder:
```
cd lookout
```
3. Install the dependencies:
```
npm install
```
4. Run the tests to ensure everything works:
```
npm test
```
5. Start developing by making changes in a new branch and following the steps outlined above.

## License

By contributing to Lookout, you agree that your contributions will be licensed under the MIT License.

## Thank You! 🙌

Thank you for taking the time to contribute to Lookout! We appreciate your efforts in making this project better for everyone. If you have any questions, feel free to ask in the discussions or open an issue.

---
<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" alt="French Flag" width="40"/>

# Contribuer à Lookout

🎉 **Merci de considérer une contribution à Lookout !** 🎉

Nous sommes ravis de collaborer avec des contributeurs de tous niveaux pour faire de Lookout le meilleur outil de gestion des dépendances. Ce guide décrit le processus pour contribuer au projet, que ce soit pour signaler un problème, suggérer une nouvelle fonctionnalité ou contribuer du code.

---

## Table des Matières

1. [Comment Contribuer](#comment-contribuer)
2. [Signaler des Problèmes](#signaler-des-problèmes)
3. [Soumettre des Modifications](#soumettre-des-modifications)
4. [Style de Code](#style-de-code)
5. [Configuration de l'Environnement de Développement](#configuration-de-lenvironnement-de-développement)
6. [Licence](#licence)

---

## Comment Contribuer

Nous accueillons différents types de contributions, notamment :

- **Signaler des bugs** 🐛
- **Suggérer de nouvelles fonctionnalités** 💡
- **Améliorer la documentation** 📝
- **Corriger des bugs ou ajouter de nouvelles fonctionnalités** 🚀

Voici les étapes pour commencer :

1. Forkez le dépôt en cliquant sur le bouton "Fork" sur GitHub.
2. Clonez votre fork sur votre machine locale en utilisant :

```
git clone https://github.com/RonanPors/lookout.git
```
3. Créez une nouvelle branche pour votre fonctionnalité ou correction de bug, à partir de la branche dev :
```
git checkout -b feature-name dev
```
4. Apportez vos modifications et validez-les avec un message descriptif :
```
git commit -m "Ajout de la fonctionnalité/fix : description"
```
5. Poussez vos modifications sur votre fork :
```
git push origin feature-name
```
6. Ouvrez une Pull Request (PR) sur le dépôt d’origine, en sélectionnant la branche dev comme base.

## Signaler des Problèmes

Si vous rencontrez un problème avec Lookout, veuillez vérifier s’il a déjà été signalé en recherchant dans la section Issues. S’il n’a pas encore été signalé, vous pouvez créer une nouvelle issue en suivant ces étapes :

1.	Cliquez sur le bouton “New Issue” dans la section Issues du dépôt.
2.	Choisissez le modèle approprié : Bug Report ou Feature Request.
3.	Fournissez une description claire et concise du problème. S’il s’agit d’un bug, incluez les étapes pour reproduire le problème ainsi que le comportement attendu et le comportement actuel.

## Soumettre des Modifications

Nous acceptons les contributions via des Pull Requests (PR). Avant de soumettre une PR, veuillez vous assurer que :

1. Vous travaillez sur la dernière version du code en récupérant les modifications depuis la branche dev :
```
git pull origin dev
```
2.	Votre code passe tous les tests et respecte les directives de style de code ci-dessous.
3.	Vous avez fourni des messages de commit et des commentaires significatifs, expliquant ce que fait le code.

Pour soumettre une Pull Request :

1. Allez dans la section Pull Requests du dépôt.
2. Cliquez sur “New Pull Request” et sélectionnez votre branche dev comme base pour la fusion.
3. Fournissez un titre et une description clairs pour vos modifications.
4. Soumettez la PR et attendez les revues.

Une fois votre PR examinée et approuvée, elle sera fusionnée dans la branche dev. Les modifications validées sur dev seront ensuite fusionnées dans main lors des releases stables.

## Style de Code

Pour garder la base de code propre et maintenable, veuillez suivre ces directives de style :

•	Utilisez des indentations de 2 espaces (pas de tabulations).
•	Suivez les meilleures pratiques JavaScript/TypeScript (puisque Lookout est principalement basé sur Node.js).
•	Utilisez des noms de variables et de fonctions explicites.
•	Assurez-vous que tout le code est bien commenté, surtout les parties complexes ou non évidentes.
•	Utilisez ESLint et Prettier pour assurer la cohérence du code.

Exécutez la commande suivante pour formater et vérifier votre code :
```
npm run lint
```
## Configuration de l’Environnement de Développement

1. Clonez le dépôt :
```
git clone https://github.com/RonanPors/lookout.git
```
2. Accédez au dossier du projet :
```
cd lookout
```
3. Installez les dépendances :
```
npm install
```
4. Exécutez les test pour vérifier que tout fonctionne :
```
npm test
```
5. Commencez à développer en apportant des modifications dans une nouvelle branche et en suivant les étapes décrites ci-dessus.

## Licence

En contribuant à Lookout, vous acceptez que vos contributions soient sous licence MIT License.

## Merci ! 🙌

Merci d’avoir pris le temps de contribuer à Lookout ! Nous apprécions vos efforts pour améliorer ce projet pour tout le monde. Si vous avez des questions, n’hésitez pas à les poser dans les discussions ou à ouvrir une issue.
