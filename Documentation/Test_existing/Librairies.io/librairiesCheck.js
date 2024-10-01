import fetch from 'node-fetch';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Remplace par ta clé API Libraries.io
const API_KEY = 'TA_CLE_API';

// Charger le fichier package.json
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJsonPath = `${__dirname}/package.json`;
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Fonction pour récupérer les détails d'une bibliothèque depuis l'API Libraries.io
async function getLibraryDetails(platform, packageName) {
    const url = `https://libraries.io/api/${platform}/${packageName}?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Fonction pour afficher les détails de chaque bibliothèque
async function displayLibraryDetails() {
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

    for (const [packageName, version] of Object.entries(dependencies)) {
        try {
            console.log(`\n📦 Vérification de ${packageName}...`);
            
            // Interroger l'API pour récupérer les détails du paquet
            const details = await getLibraryDetails('npm', packageName);

            // Récupérer les informations sur la licence
            let licenses = 'Non spécifiée';
            if (Array.isArray(details.licenses)) {
                licenses = details.licenses.join(', ');
            } else if (typeof details.licenses === 'string') {
                licenses = details.licenses;
            }

            // Afficher les informations pertinentes
            console.log(`- Dernière version : ${details.latest_release_number}`);
            console.log(`- License : ${licenses}`);
            console.log(`- Nombre de contributeurs : ${details.contributors_count || 'N/A'}`);
            console.log(`- Dépôt : ${details.repository_url}`);
            console.log(`- Mises à jour récentes : ${details.latest_release_published_at}`);
            console.log(`- Popularité (Stars GitHub) : ${details.stars || 'N/A'}`);
            console.log(`- SourceRank (qualité globale) : ${details.sourcerank || 'N/A'}`);

            // Si des dépendances sont trouvées
            if (details.dependencies && details.dependencies.length > 0) {
                console.log(`- Dépendances :`);
                details.dependencies.forEach(dep => {
                    console.log(`  - ${dep.name} : ${dep.requirements}`);
                });
            } else {
                console.log(`- Pas de dépendances trouvées`);
            }

            // Vérification des vulnérabilités et des pratiques de sécurité
            if (details.has_security_policy) {
                console.log(`- Politique de sécurité en place : Oui`);
            } else {
                console.log(`- Politique de sécurité en place : Non`);
            }
            
            console.log(`- Pratiques de développement sécurisé (2FA) : ${details.has_two_factor_authentication ? 'Oui' : 'Non'}`);

        } catch (error) {
            console.error(`Erreur lors de la vérification de ${packageName}:`, error.message);
        }
    }
}

// Exécuter la fonction
displayLibraryDetails();
