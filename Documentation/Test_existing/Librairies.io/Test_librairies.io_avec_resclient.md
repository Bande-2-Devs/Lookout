# Récupération des Détails d'un Package avec Libraries.io

Dans ce document, nous allons décrire le processus de récupération des détails d'un package Node.js, en l'occurrence **Express**, en utilisant l'API Libraries.io. Nous utiliserons un client REST pour effectuer un appel API simple afin d'obtenir les informations nécessaires.

## Prérequis

1. **Node.js** installé sur votre machine.
2. **Visual Studio Code** ou tout autre éditeur de texte avec la capacité d'exécuter des requêtes HTTP.
3. Une clé API de Libraries.io .

## Étapes à Suivre

### 1. Créer un Fichier de Requête

Ouvrez votre éditeur de texte et créez un fichier avec l'extension `.http` ou `.rest`. Nommez-le par exemple `api_request.http`.

### 2. Écrire la Requête HTTP

Dans le fichier créé, ajoutez la requête suivante pour récupérer les détails du package **Express** :

```http
GET https://libraries.io/api/npm/express?api_key=votre_api_key
```

Le resultat :

```http
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: strict-origin-when-cross-origin
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 40
Content-Type: application/json; charset=utf-8
ETag: W/"355275e3bc4b6fdc87545d2c1e7d3a7c"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: e6fcc8cd-0266-4667-aa4b-a1a346efe1b9
X-Runtime: 0.170234
Strict-Transport-Security: max-age=63072000; includeSubDomains
Vary: Origin
Content-Length: 51212
Date: Mon, 14 Oct 2024 08:35:21 GMT
Via: 1.1 google
Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
Connection: close

{
  "code_of_conduct_url": "https://github.com/expressjs/express/blob/master/Code-Of-Conduct.md",
  "contributions_count": 314,
  "contribution_guidelines_url": "https://github.com/expressjs/express/blob/master/Contributing.md",
  "dependent_repos_count": 44597,
  "dependents_count": 129325,
  "deprecation_reason": null,
  "description": "Fast, unopinionated, minimalist web framework",
  "forks": 15928,
  "funding_urls": [],
  "homepage": "http://expressjs.com/",
  "keywords": [
    "express",
    "framework",
    "sinatra",
    "web",
    "http",
    "rest",
    "restful",
    "router",
    "app",
    "api",
    "javascript",
    "nodejs",
    "server"
  ],
  "language": "JavaScript",
  "latest_download_url": "https://registry.npmjs.org/express/-/express-5.0.1.tgz",
  "latest_release_number": "5.0.1",
  "latest_release_published_at": "2024-10-08T19:42:44.129Z",
  "latest_stable_release_number": "5.0.1",
  "latest_stable_release_published_at": "2024-10-08T19:42:44.129Z",
  "license_normalized": false,
  "licenses": "MIT",
  "name": "express",
  "normalized_licenses": [
    "MIT"
  ],
  "package_manager_url": "https://www.npmjs.com/package/express",
  "platform": "NPM",
  "rank": 30,
  "repository_license": "MIT",
  "repository_status": null,
  "repository_url": "https://github.com/expressjs/express",
  "security_policy_url": "https://github.com/expressjs/express/security/policy",
  "stars": 65376,
  "status": null,
  "versions": [
     {
      "number": "5.0.0-alpha.5",
      "published_at": "2017-03-06T13:51:05.877Z",
      "spdx_expression": "MIT",
      "original_license": "MIT",
      "researched_at": null,
      "repository_sources": [
        "NPM"
      ]
    },
    {
      "number": "5.0.0-alpha.6",
      "published_at": "2017-09-25T05:32:38.266Z",
      "spdx_expression": "MIT",
      "original_license": "MIT",
      "researched_at": null,
      "repository_sources": [
        "NPM"
      ]
    },
    {
      "number": "5.0.0-alpha.7",
      "published_at": "2018-10-27T03:12:11.060Z",
      "spdx_expression": "MIT",
      "original_license": "MIT",
      "researched_at": null,
      "repository_sources": [
        "NPM"
      ]
    },
    {
      "number": "5.0.0-alpha.8",
      "published_at": "2020-03-26T00:57:02.755Z",
      "spdx_expression": "MIT",
      "original_license": "MIT",
      "researched_at": null,
      "repository_sources": [
        "NPM"
      ]
    },
    {
      "number": "5.0.0-beta.1",
      "published_at": "2022-02-15T01:11:25.229Z",
      "spdx_expression": "MIT",
      "original_license": "MIT",
      "researched_at": null,
      "repository_sources": [
        "NPM"
      ]
    },
    {
      "number": "5.0.0-beta.2",
      "published_at": "2024-03-21T03:01:22.099Z",
      "spdx_expression": "MIT",
      "original_license": "MIT",
      "researched_at": null,
      "repository_sources": [
        "NPM"
      ]
    },
    {
      "number": "5.0.0-beta.3",
      "published_at": "2024-03-25T14:42:32.769Z",
      "spdx_expression": "MIT",
      "original_license": "MIT",
      "researched_at": null,
      "repository_sources": [
        "NPM"
      ]
    },
    {
      "number": "5.0.1",
      "published_at": "2024-10-08T19:42:44.129Z",
      "spdx_expression": "MIT",
      "original_license": "MIT",
      "researched_at": null,
      "repository_sources": [
        "NPM"
      ]
    }
  ]
}
```