# README.md

## Projet : Application Express avec Authentification

### Description
Cette application est construite avec Express.js et utilise les contrôleurs de `routing-controllers` pour gérer l'authentification des utilisateurs. Elle inclut des fonctionnalités telles que l'enregistrement, la connexion, la réinitialisation de mot de passe, et la vérification d'email.

### Fonctionnalités
- **Enregistrement des utilisateurs** avec validation des mots de passe et des emails
- **Connexion des utilisateurs** avec support de la double authentification (2FA)
- **Réinitialisation des mots de passe**
- **Vérification des emails**
- **Gestion des codes de vérification** pour 2FA

### Prérequis
- Node.js (version 12 ou ultérieure)
- MongoDB

### Installation

1. Cloner le dépôt :
    ```sh
    git clone https://github.com/espero-soft/backend_model_nodejs_typescript.git
    cd backend_model_nodejs_typescript
    ```

2. Installer les dépendances :
    ```sh
    npm install
    ```

3. Créer un fichier `.env` à la racine du projet et y ajouter les variables d'environnement nécessaires :
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/votre-base-de-donnees
    JWT_SECRET=votre_secret_jwt
    TOKEN_EXPIRE=3600s
    NODE_ENV=development
    ```

4. Lancer le serveur :
    ```sh
    npm start
    ```

### Utilisation
L'application expose plusieurs endpoints pour gérer l'authentification des utilisateurs :

- **POST /api/auth/register**
    - Description : Enregistrement d'un nouvel utilisateur
    - Corps de la requête :
      ```json
      {
        "email": "exemple@example.com",
        "username": "exemple",
        "password": "MotDePasseFort123",
        "fullName": "Nom Complet"
      }
      ```

- **POST /api/auth/login**
    - Description : Connexion d'un utilisateur
    - Corps de la requête :
      ```json
      {
        "email": "exemple@example.com",
        "password": "MotDePasseFort123"
      }
      ```

- **POST /api/auth/reset-password**
    - Description : Réinitialisation du mot de passe
    - Corps de la requête :
      ```json
      {
        "email": "exemple@example.com",
        "newPassword": "NouveauMotDePasse123"
      }
      ```

- **POST /api/auth/verify-email**
    - Description : Vérification de l'email avec un code
    - Corps de la requête :
      ```json
      {
        "email": "exemple@example.com",
        "code": "123456"
      }
      ```

- **POST /api/auth/verify-code**
    - Description : Vérification du code pour 2FA
    - Corps de la requête :
      ```json
      {
        "userId": "userId",
        "partialToken": "partialToken",
        "code": "123456"
      }
      ```

- **POST /api/auth/resend-verify-code**
    - Description : Renvoyer le code de vérification pour 2FA
    - Corps de la requête :
      ```json
      {
        "userId": "userId",
        "partialToken": "partialToken"
      }
      ```

### Middleware
- **CORS** : Configuré pour autoriser toutes les origines en développement.
- **cookie-parser** : Pour analyser les cookies des requêtes.
- **morgan** : Pour le logging des requêtes HTTP.
- **Custom Middleware** :
    - `checkPasswordStrength` : Pour vérifier la force du mot de passe.
    - `validateEmailFormat` : Pour valider le format de l'email.
    - `validateMXRecord` : Pour vérifier les enregistrements MX de l'email.

### Structure du Projet
- `controllers` : Contient les contrôleurs pour gérer les routes.
- `helpers` : Fonctions utilitaires pour les réponses, les emails, et la génération de codes.
- `middleware` : Middlewares pour la validation des mots de passe et des emails.
- `models` : Modèles Mongoose pour les utilisateurs et les codes de vérification.

### Connexion à MongoDB
L'application utilise Mongoose pour se connecter à une base de données MongoDB. Assurez-vous que MongoDB est en cours d'exécution et que la variable `MONGO_URI` est correctement définie dans le fichier `.env`.

### Démarrage du Serveur
L'application écoute par défaut sur le port 3000 (ou un autre port défini dans `.env`). Une fois démarrée, vous verrez un message indiquant que le serveur est en cours d'exécution et connecté à MongoDB.

### Auteur
- **Votre Nom**
- **Email :** contact@espero-soft.com

### Licence
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.

---

Ce `README.md` fournit toutes les informations nécessaires pour installer, configurer et utiliser l'application d'authentification Express. 