# Test de `dependencies.io`

## URL du logiciel

- [Site officiel de Dependencies.io](https://www.dependencies.io/quickstart/#null)
- [Dépôt GitHub](https://github.com/dropseed/deps)

## Installation

```bash
curl -sSL https://deps.app/install.sh | bash -s -- -b $HOME/bin

# Charger l'environnement
export PATH="$HOME/bin:$PATH"
```

## Utilisation

```bash
cd project
deps upgrade
```

## Résultat pour un projet en JavaScript

L'analyse prend en charge les fichiers suivants :

- `package.json`
- `package-lock.json`
- `yarn.lock`

Exemple de résultat :

```bash
03:38:01 seb43@VMware-dev back-end ±|main|→ deps upgrade
No local config found, detecting your dependencies automatically
---
version: 3
dependencies:
- type: js
  path: .

---
Collecting with deps-js...

1 new updates to be made
[672cda5] Update helmet in package.json from ^7.1.0 to ^8.0.0

✔ Update helmet in package.json from ^7.1.0 to ^8.0.0
Updating with /home/seb43/.cache/deps/components/deps-js
```

`Deps` est un logiciel de type CLI (Command Line Interface) qui demande à l'utilisateur s'il souhaite ou non appliquer une mise à jour. Il est compilé en Go, et lors de son exécution, sa première action consiste à lancer la commande suivante pour analyser les dépendances :

```bash
npm ls ${name} --depth=0 --json
```

Il existe également une version de `Deps` qui permet de créer un workflow automatisé sur GitHub. Grâce à un token, il est possible de mettre à jour des dépendances via ce workflow.

## Déinstallation

```bash
# Supprimer le binaire
rm /home/user/bin/deps
# Nettoyer le cache
rm -rf /home/user/.cache/deps
# Vérification des variables d'environnement
nano ~/.bashrc
# Si présent supprimer :
export PATH="$HOME/bin:$PATH"
# CTRL S et CTRL X
source ~/.bashrc
```
