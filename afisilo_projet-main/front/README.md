# AFRISILO SA - Frontend

AFRISILO SA est une entreprise du secteur de l'agroalimentaire et du négoce des matières premières diverses. Ce projet est le front-end de notre site web, développé avec React et TypeScript.

## Table des matières

- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Scripts disponibles](#scripts-disponibles)
- [Dépendances](#dépendances)
- [Fonctionnalités](#fonctionnalités)
- [Contribution](#contribution)
- [Contact](#contact)

## Structure du projet

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── assets
│   │   └── images
│   ├── components
│   │   └── HeaderPage
│   │       ├── HeaderPage.tsx
│   │       └── HeaderPage.css
│   ├── pages
│   │   ├── Accueil.tsx
│   │   ├── QuiSommesNous.tsx
│   │   ├── CeQueNousFaisons.tsx
│   │   ├── NosProduits.tsx
│   │   ├── AgricultureBiologique.tsx
│   │   ├── Perspectives.tsx
│   │   ├── NousContacter.tsx
│   │   └── PolitiqueConfidentialite.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

## Installation

Pour installer et démarrer le projet localement, suivez les étapes ci-dessous :

1. **Cloner le dépôt**

    ```bash
    git clone https://github.com/votre-utilisateur/afrisilo-frontend.git
    cd afrisilo-frontend
    ```

2. **Installer les dépendances**

    ```bash
    npm install
    ```

3. **Démarrer le serveur de développement**

    ```bash
    npm start
    ```

    Le serveur de développement sera lancé à l'adresse [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter les scripts suivants :

### `npm start`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour l'afficher dans votre navigateur.

### `npm test`

Lance le runner de tests en mode interactif.\
Voir la section sur [running tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`

Construit l'application pour la production dans le dossier `build`.\
Il regroupe correctement React en mode production et optimise la build pour obtenir la meilleure performance.

### `npm run eject`

**Note: cette opération est irréversible !**

Si vous n'êtes pas satisfait de la configuration de build et des choix de configuration, vous pouvez `eject` à tout moment. Ce commande supprimera la dépendance build unique de votre projet.

## Dépendances

- **React** - Librairie pour construire des interfaces utilisateur.
- **TypeScript** - Superset JavaScript qui ajoute des types.
- **React Router** - Gestion des routes pour React.
- **CSS Modules** - Pour un encapsulage de style scoped.

## Fonctionnalités

- **Accueil**
- **Qui sommes-nous ?**
- **Ce que nous faisons**
- **Nos Produits**
- **Agriculture Biologique**
- **Perspectives**
- **Nous contacter**
- **Politique de Confidentialité**

## Contribution

Les contributions sont les bienvenues ! Pour proposer des changements, veuillez suivre les étapes ci-dessous :

1. **Fork** le projet.
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. **Commit** vos changements (`git commit -m 'Add some AmazingFeature'`).
4. **Push** vers la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une **Pull Request**.

## Contact

Pour toute question ou information supplémentaire, veuillez nous contacter à l'adresse suivante : [contact@afrisilo.com](mailto:contact@afrisilo.com)
