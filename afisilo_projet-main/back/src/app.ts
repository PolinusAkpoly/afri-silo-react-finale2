import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/userController';
import { AuthController } from './controllers/authController';
import { sendErrorResponse, sendSuccessResponse } from './helpers/responseHelper';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { ProductController } from './controllers/ProductController';
import { ServiceController } from './controllers/ServiceController';
import { CategoryController } from './controllers/CategoryController';

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';

const app = express();
// Configuration de CORS
const corsOptions = {
    origin: process.env.NODE_ENV === 'development' ? '*' : 'https://afrisilo.com', // Remplacez par le domaine que vous souhaitez autoriser
    optionsSuccessStatus: 200, // Certains navigateurs ne supportent pas le statut 204 pour les requêtes OPTIONS
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes HTTP autorisées
    allowedHeaders: ['Content-Type', 'Authorization', 'xsrf-token', 'credentials'], // Liste des en-têtes autorisés
    credentials: true,
};
app.use(cors(corsOptions));



// Middleware pour parser le JSON
app.use(express.json());

// Utilisation du cookie-parser pour analyser les cookies de la requête
app.use(cookieParser());

// Middleware pour gérer les requêtes HTTP avec morgan
app.use(morgan('combined'));

app.use((req: Request, res: Response, next: NextFunction) => {
    const lang = req.cookies.lang || 'en';
    res.locals.lang = lang;
    next();
})

// Création de l'application Express avec routing-controllers
const routingControllersApp = createExpressServer({
    controllers: [
        UserController,
        AuthController,
        ProductController,
        ServiceController,
        CategoryController
    ],
});

// Utilisation des middlewares de routing-controllers
app.use(routingControllersApp);

// Connexion à MongoDB avec Mongoose
mongoose.connect(MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Route de bienvenue
app.get('/', (req: Request, res: Response) => {
    sendSuccessResponse(res, 200, {message : "Welcome!"})
});

// Middleware pour gérer les routes non trouvées (404)
app.use((req: Request, res: Response, next: NextFunction) => {
    sendErrorResponse(res, 404, 'Resource not found !')
});

// Middleware global de gestion des erreurs
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    sendErrorResponse(res, 500, 'Internal Server Error')
});


// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
