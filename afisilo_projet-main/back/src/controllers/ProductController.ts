/**
 * Generate with Mudey Formation (https://mudey.fr)
 * Created at : 25/05/2024 21:54:19
 */
import { Controller, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore } from 'routing-controllers';
import { Request, Response } from 'express';
import Product from '../models/Product';
import { sendSuccessResponse, sendErrorResponse } from '../helpers/responseHelper';
import { getPaginationUrls } from '../helpers/paginationHelper';
import { checkRole, verifyToken } from '../middleware/authMiddleware';
import mongoose from 'mongoose';
import Category from '../models/Category';

@Controller('/api/products')
export class ProductController {

  @Post('/')
  @UseBefore(checkRole(['ROLE_ADMIN']))
  async createProduct(@Req() req: Request, @Res() res: Response) {
    try {
      const product = new Product(req.body);
      await product.save();
      return sendSuccessResponse(res, 201, { data: product });
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Get('/')
  async getProducts(@Req() req: Request, @Res() res: Response) {
    // await Product.deleteMany({})
    const products = [
      {
        "name": "Soja",
        "description": "Le soja est une légumineuse riche en protéines, utilisée dans de nombreux produits alimentaires et industriels.",
        "imageUrl": "/assets/products/soja.webp",
        "category": "66532bed63e6843099c5b071"
      },
      {
        "name": "Haricot",
        "description": "Les haricots sont une source importante de protéines et de fibres, consommés dans le monde entier.",
        "imageUrl": "/assets/products/haricot.webp",
        "category": "66532bed63e6843099c5b071"
      },
      {
        "name": "Arachides",
        "description": "Les arachides sont des graines comestibles souvent consommées grillées ou utilisées pour produire de l'huile et du beurre d'arachide.",
        "imageUrl": "/assets/products/arachides.webp",
        "category": "66532bed63e6843099c5b071"
      },
      {
        "name": "Maïs",
        "description": "Le maïs est une céréale cultivée pour ses grains utilisés comme aliment de base dans de nombreuses régions du monde.",
        "imageUrl": "/assets/products/mais.webp",
        "category": "66532bed63e6843099c5b072"
      },
      {
        "name": "Fonio",
        "description": "Le fonio est une céréale africaine ancienne, riche en nutriments et utilisée dans divers plats traditionnels.",
        "imageUrl": "/assets/products/fonio.webp",
        "category": "66532bed63e6843099c5b072"
      },
      {
        "name": "Sésame",
        "description": "Le sésame est une graine oléagineuse utilisée pour ses graines riches en huile et ses propriétés nutritionnelles.",
        "imageUrl": "/assets/products/sesame.webp",
        "category": "66532bed63e6843099c5b073"
      },
      {
        "name": "Karité",
        "description": "Le karité est connu pour ses noix dont on extrait un beurre utilisé en cosmétique et en cuisine.",
        "imageUrl": "/assets/products/karité.webp",
        "category": "66532bed63e6843099c5b073"
      },
      {
        "name": "Noix de cajou",
        "description": "La noix de cajou est une graine comestible riche en nutriments et largement consommée comme collation ou ingrédient culinaire.",
        "imageUrl": "/assets/products/noix_de_cadjou.webp",
        "category": "66532bed63e6843099c5b073"
      },
      {
        "name": "Graine de courge",
        "description": "Les graines de courge sont consommées pour leur richesse en nutriments, souvent grillées et salées comme collation.",
        "imageUrl": "/assets/products/graine_de_courge.webp",
        "category": "66532bed63e6843099c5b073"
      },
      {
        "name": "Petit colas",
        "description": "Le petit colas, également appelé colatier, produit des graines utilisées pour leur saveur unique et leurs propriétés stimulantes.",
        "imageUrl": "/assets/products/petit_colas.webp",
        "category": "66532bed63e6843099c5b073"
      },
      {
        "name": "Gingembre",
        "description": "Le gingembre est une racine épicée utilisée dans la cuisine et la médecine traditionnelle pour ses nombreux bienfaits pour la santé.",
        "imageUrl": "/assets/products/gingembre.webp",
        "category": "66532bed63e6843099c5b074"
      },
      {
        "name": "Ananas",
        "description": "Fruit tropical sucré et juteux.",
        "imageUrl": "/assets/products/ananas.webp",
        "category": "66532bed63e6843099c5b075"
      },
      {
        "name": "Mangue",
        "description": "Fruit tropical doux et parfumé.",
        "imageUrl": "/assets/products/mangue.webp",
        "category": "66532bed63e6843099c5b075"
      },
      {
        "name": "Pastèque",
        "description": "Fruit d'été, très rafraîchissant et riche en eau.",
        "imageUrl": "/assets/products/pasteque.webp",
        "category": "66532bed63e6843099c5b075"
      },
      {
        "name": "Orange",
        "description": "Agrume riche en vitamine C.",
        "imageUrl": "/assets/products/orange.webp",
        "category": "66532bed63e6843099c5b075"
      },
      {
        "name": "Carotte",
        "description": "Légume racine, riche en vitamines A.",
        "imageUrl": "/assets/products/carottes.webp",
        "category": "66532bed63e6843099c5b076"
      },
      {
        "name": "Concombre",
        "description": "Légume frais et croquant, riche en eau.",
        "imageUrl": "/assets/products/concombre.webp",
        "category": "66532bed63e6843099c5b076"
      },
      {
        "name": "Ail",
        "description": "Bulbe utilisé comme condiment et plante médicinale.",
        "imageUrl": "/assets/products/ail.webp",
        "category": "66532bed63e6843099c5b076"
      },
      {
        "name": "Piment",
        "description": "Légume fruité et épicé, utilisé pour relever les plats.",
        "imageUrl": "/assets/products/piment.webp",
        "category": "66532bed63e6843099c5b076"
      },
      {
        "name": "Tomate",
        "description": "Fruit charnu utilisé comme légume en cuisine.",
        "imageUrl": "/assets/products/tomate.webp",
        "category": "66532bed63e6843099c5b076"
      },
      {
        "name": "Oignon",
        "description": "Bulbe utilisé comme légume et condiment.",
        "imageUrl": "/assets/products/oignon.webp",
        "category": "66532bed63e6843099c5b076"
      },
      {
        "name": "Pomme de terre",
        "description": "Tubercule riche en amidon, utilisé comme légume de base.",
        "imageUrl": "/assets/products/pomme_de_terre.webp",
        "category": "66532bed63e6843099c5b076"
      }
    ]
    // await Promise.all(products.map(async (product) => {
    //   const categoryId = new mongoose.Types.ObjectId(product.category);

    //   const category = await Category.findOne({ _id: categoryId });
    //   console.log({ category });
    //   if (category) {
    //     // product.category  = category
    //   }
    //   await (new Product(product)).save()
    // }))
    try {
      const page = parseInt(req.query.page as string, 10) || 1;
      let limit = parseInt(req.query.limit as string, 10) || 10;

      // maxium de donnée récupérée
      limit = limit <= 50 ? limit : 50

      const skip = (page - 1) * limit;

      let baseUrl = `${process.env.NODE_ENV === 'development' ? req.protocol : 'https'}://${req.get('host')}${req.baseUrl}`;

      const products = await Product.find().skip(skip).limit(limit).select('-password');
      const total = await Product.countDocuments();

      const paginationUrls = getPaginationUrls(page, limit, total, baseUrl);

      return sendSuccessResponse(res, 200, {
        datas: products,
        pagination: {
          total,
          page,
          limit,
          ...paginationUrls,
        },
      });
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Get('/:id')
  @UseBefore(checkRole(['ROLE_USER']))
  async getProductById(@Param('id') id: string, @Res() res: Response) {
    try {
      const product = await Product.findById(id).select('-password');
      if (!product) {
        return sendErrorResponse(res, 404, 'Product not found');
      }
      return sendSuccessResponse(res, 200, { data: product });
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Put('/:id')
  @UseBefore(checkRole(['ROLE_USER']))
  async updateProduct(@Param('id') id: string, @Body() body: any, @Res() res: Response) {
    try {
      const product = await Product.findByIdAndUpdate(id, body, { new: true });
      if (!product) {
        return sendErrorResponse(res, 404, 'Product not found');
      }
      return sendSuccessResponse(res, 200, { data: product });
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Delete('/:id')
  @UseBefore(checkRole(['ROLE_ADMIN', 'ROLE_USER']))
  async deleteProduct(@Param('id') id: string, @Res() res: Response) {
    try {
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return sendErrorResponse(res, 404, 'Product not found');
      }
      return sendSuccessResponse(res, 200, 'Product deleted');
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }
}
