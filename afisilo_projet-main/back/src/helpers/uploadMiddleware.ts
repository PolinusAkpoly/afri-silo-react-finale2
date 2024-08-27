import { Request, Response, NextFunction } from 'express';
import multer, { FileFilterCallback } from 'multer';
import { extname } from 'path';

// Définir les types MIME pour les types de fichiers génériques
const mimeTypesMap: { [key: string]: string[] } = {
  image: ['image/jpeg', 'image/png', 'image/gif'],
  video: ['video/mp4', 'video/mpeg', 'video/ogg'],
  pdf: ['application/pdf']
};

// Configuration de Multer pour le stockage des fichiers
const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, 'public/uploads/'); // Dossier de destination des fichiers téléchargés
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Nom du fichier téléchargé
  }
});

// Middleware pour télécharger un ou plusieurs fichiers
export const uploadMiddleware = (
  fieldName: string,
  maxCount: number = 1,
  fileType: keyof typeof mimeTypesMap = 'image'
) => {
  // Récupérer les types MIME pour le type de fichier spécifié
  const allowedMimeTypes = mimeTypesMap[fileType] || [];

  // Limiter la taille des fichiers et filtrer par type si nécessaire
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // Limite de taille de fichier de 5MB
    fileFilter: (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
      if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error(`Only ${allowedMimeTypes.join(', ')} files are allowed`), false);
      }
    }
  });

  return (req: Request, res: Response, next: NextFunction) => {
    const uploader = upload.array(fieldName, maxCount);
    uploader(req, res, (err: any) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      next();
    });
  };
};
