/**
 * Generate with Mudey Formation (https://mudey.fr)
 * Created at : 25/05/2024 21:52:14
 */
import { Controller, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore } from 'routing-controllers';
import { Request, Response } from 'express';
import Category from '../models/Category';
import { sendSuccessResponse, sendErrorResponse } from '../helpers/responseHelper';
import { getPaginationUrls } from '../helpers/paginationHelper';
import { checkRole, verifyToken } from '../middleware/authMiddleware';

@Controller('/api/categories')
export class CategoryController {

  @Post('/')
  // @UseBefore(checkRole(['ROLE_ADMIN']))
  async createCategory(@Req() req: Request, @Res() res: Response) {
    try {
      const category = new Category(req.body);
      await category.save();
      return sendSuccessResponse(res, 201, { data: category });
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Get('/')
  async getCategorys(@Req() req: Request, @Res() res: Response) {
    
    try {
      const page = parseInt(req.query.page as string, 10) || 1;
      let limit = parseInt(req.query.limit as string, 10) || 10;

      // maxium de donnée récupérée
      limit = limit <= 50 ? limit : 50

      const skip = (page - 1) * limit;

      let baseUrl = `${process.env.NODE_ENV === 'development' ? req.protocol : 'https'}://${req.get('host')}${req.baseUrl}`;

      const categorys = await Category.find().skip(skip).limit(limit).select('-password');
      const total = await Category.countDocuments();

      const paginationUrls = getPaginationUrls(page, limit, total, baseUrl);

      

      return sendSuccessResponse(res, 200, {
        datas: categorys,
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
  async getCategoryById(@Param('id') id: string, @Res() res: Response) {
    try {
      const category = await Category.findById(id);
      if (!category) {
        return sendErrorResponse(res, 404, 'Category not found');
      }
      return sendSuccessResponse(res, 200, { data: category });
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Put('/:id')
  // @UseBefore(checkRole(['ROLE_USER']))
  async updateCategory(@Param('id') id: string, @Body() body: any, @Res() res: Response) {
    try {
      const category = await Category.findByIdAndUpdate(id, body, { new: true });
      if (!category) {
        return sendErrorResponse(res, 404, 'Category not found');
      }
      return sendSuccessResponse(res, 200, { data: category });
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Delete('/:id')
  @UseBefore(checkRole(['ROLE_ADMIN', 'ROLE_USER']))
  async deleteCategory(@Param('id') id: string, @Res() res: Response) {
    try {
      const category = await Category.findByIdAndDelete(id);
      if (!category) {
        return sendErrorResponse(res, 404, 'Category not found');
      }
      return sendSuccessResponse(res, 200, 'Category deleted');
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }
}
