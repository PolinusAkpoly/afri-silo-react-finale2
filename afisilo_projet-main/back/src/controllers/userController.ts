import { Controller, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore  } from 'routing-controllers';
import { Request, Response } from 'express';
import User from '../models/User';
import { sendSuccessResponse, sendErrorResponse } from '../helpers/responseHelper';
import { getPaginationUrls } from '../helpers/paginationHelper';
import { checkRole, verifyToken } from '../middleware/authMiddleware';

@Controller('/api/users')
@UseBefore(verifyToken)
export class UserController {

  @Post('/')
  @UseBefore(checkRole(['ROLE_ADMIN']))
  async createUser(@Req() req: Request, @Res() res: Response) {
    try {
      const user = new User(req.body);
      await user.save();
      return sendSuccessResponse(res, 201, {data : user});
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Get('/')
  @UseBefore(checkRole(['ROLE_ADMIN']))
  async getUsers(@Req() req: Request, @Res() res: Response) {
    try {
      const page = parseInt(req.query.page as string, 10) || 1;
      let limit = parseInt(req.query.limit as string, 10) || 10;

      // maxium de donnée récupérée
      limit = limit <= 50 ? limit : 50

      const skip = (page - 1) * limit;

      let baseUrl = `${ process.env.NODE_ENV ==='development' ? req.protocol : 'https'}://${req.get('host')}${req.baseUrl}`;

      const users = await User.find().skip(skip).limit(limit).select('-password');
      const total = await User.countDocuments();

      const paginationUrls = getPaginationUrls(page, limit, total, baseUrl);

      return sendSuccessResponse(res, 200, {
        datas : users,
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
  async getUserById(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await User.findById(id).select('-password');
      if (!user) {
        return sendErrorResponse(res, 404, 'User not found');
      }
      return sendSuccessResponse(res, 200, {data: user});
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Put('/:id')
  @UseBefore(checkRole(['ROLE_USER']))
  async updateUser(@Param('id') id: string, @Body() body: any, @Res() res: Response) {
    try {
      const user = await User.findByIdAndUpdate(id, body, { new: true });
      if (!user) {
        return sendErrorResponse(res, 404, 'User not found');
      }
      return sendSuccessResponse(res, 200, {data: user});
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Delete('/:id')
  @UseBefore(checkRole(['ROLE_ADMIN','ROLE_USER']))
  async deleteUser(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return sendErrorResponse(res, 404, 'User not found');
      }
      return sendSuccessResponse(res, 200, 'User deleted');
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }
}
