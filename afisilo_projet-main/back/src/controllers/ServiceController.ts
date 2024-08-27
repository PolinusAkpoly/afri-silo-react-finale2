/**
 * Generate with Mudey Formation (https://mudey.fr)
 * Created at : 25/05/2024 21:59:17
 */
import { Controller, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore  } from 'routing-controllers';
import { Request, Response } from 'express';
import Service from '../models/Service';
import { sendSuccessResponse, sendErrorResponse } from '../helpers/responseHelper';
import { getPaginationUrls } from '../helpers/paginationHelper';
import { checkRole, verifyToken } from '../middleware/authMiddleware';

@Controller('/api/services')
// @UseBefore(verifyToken)
export class ServiceController {

  @Post('/')
  // @UseBefore(checkRole(['ROLE_ADMIN']))
  async createService(@Req() req: Request, @Res() res: Response) {
    try {
      const service = new Service(req.body);
      await service.save();
      return sendSuccessResponse(res, 201, {data : service});
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Get('/')
  // @UseBefore(checkRole(['ROLE_ADMIN']))
  async getServices(@Req() req: Request, @Res() res: Response) {
    try {
      const page = parseInt(req.query.page as string, 10) || 1;
      let limit = parseInt(req.query.limit as string, 10) || 10;

      // maxium de donnée récupérée
      limit = limit <= 50 ? limit : 50

      const skip = (page - 1) * limit;

      let baseUrl = `${ process.env.NODE_ENV ==='development' ? req.protocol : 'https'}://${req.get('host')}${req.baseUrl}`;

      const services = await Service.find().skip(skip).limit(limit).select('-password');
      const total = await Service.countDocuments();

      const paginationUrls = getPaginationUrls(page, limit, total, baseUrl);

      return sendSuccessResponse(res, 200, {
        datas : services,
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
  async getServiceById(@Param('id') id: string, @Res() res: Response) {
    try {
      const service = await Service.findById(id).select('-password');
      if (!service) {
        return sendErrorResponse(res, 404, 'Service not found');
      }
      return sendSuccessResponse(res, 200, {data: service});
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Put('/:id')
  // @UseBefore(checkRole(['ROLE_USER']))
  async updateService(@Param('id') id: string, @Body() body: any, @Res() res: Response) {
    try {
      const service = await Service.findByIdAndUpdate(id, body, { new: true });
      if (!service) {
        return sendErrorResponse(res, 404, 'Service not found');
      }
      return sendSuccessResponse(res, 200, {data: service});
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Delete('/:id')
  @UseBefore(checkRole(['ROLE_ADMIN','ROLE_USER']))
  async deleteService(@Param('id') id: string, @Res() res: Response) {
    try {
      const service = await Service.findByIdAndDelete(id);
      if (!service) {
        return sendErrorResponse(res, 404, 'Service not found');
      }
      return sendSuccessResponse(res, 200, 'Service deleted');
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }
}
