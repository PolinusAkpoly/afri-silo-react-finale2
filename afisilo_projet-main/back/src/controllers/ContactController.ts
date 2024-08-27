/**
 * Generate with Mudey Formation (https://mudey.fr)
 * Created at : 25/05/2024 22:10:16
 */
import { Controller, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore  } from 'routing-controllers';
import { Request, Response } from 'express';
import Contact from '../models/Contact';
import { sendSuccessResponse, sendErrorResponse } from '../helpers/responseHelper';
import { getPaginationUrls } from '../helpers/paginationHelper';
import { checkRole, verifyToken } from '../middleware/authMiddleware';
import { sendEmail } from '../helpers/emailHelper';

@Controller('/api/contacts')
// @UseBefore(verifyToken)
export class ContactController {

  @Post('/')
  async createContact(@Req() req: Request, @Res() res: Response) {
    try {
      const contact = new Contact(req.body);
      await contact.save();

      const htmlContent = `
          <h2>Vous avez reçu un message depuis votre site Web</h2>
          <p><strong>Sujet:</strong> ${contact.subject}</p>
          <p><strong>Expéditeur:</strong> ${contact.lastname} ${contact.firstname} (<a href="mailto:${contact.email}">${contact.email}</a>)</p>
          <p><strong>Heure d'envoi:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Message:</strong></p>
          <p>${contact.message}</p>

          <br>
          -------
          <p style="font-size: 0.9em; color: grey;">Email généré et envoyé par Espero-soft Informatiques Bénin.</p>
      
        `

      sendEmail("info@afrisilo.com", contact.subject, htmlContent )

      return sendSuccessResponse(res, 201, {data : contact});
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Get('/')
  @UseBefore(checkRole(['ROLE_ADMIN']))
  async getContacts(@Req() req: Request, @Res() res: Response) {
    try {
      const page = parseInt(req.query.page as string, 10) || 1;
      let limit = parseInt(req.query.limit as string, 10) || 10;

      // maxium de donnée récupérée
      limit = limit <= 50 ? limit : 50

      const skip = (page - 1) * limit;

      let baseUrl = `${ process.env.NODE_ENV ==='development' ? req.protocol : 'https'}://${req.get('host')}${req.baseUrl}`;

      const contacts = await Contact.find().skip(skip).limit(limit).select('-password');
      const total = await Contact.countDocuments();

      const paginationUrls = getPaginationUrls(page, limit, total, baseUrl);

      return sendSuccessResponse(res, 200, {
        datas : contacts,
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
  async getContactById(@Param('id') id: string, @Res() res: Response) {
    try {
      const contact = await Contact.findById(id).select('-password');
      if (!contact) {
        return sendErrorResponse(res, 404, 'Contact not found');
      }
      return sendSuccessResponse(res, 200, {data: contact});
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Put('/:id')
  @UseBefore(checkRole(['ROLE_USER']))
  async updateContact(@Param('id') id: string, @Body() body: any, @Res() res: Response) {
    try {
      const contact = await Contact.findByIdAndUpdate(id, body, { new: true });
      if (!contact) {
        return sendErrorResponse(res, 404, 'Contact not found');
      }
      return sendSuccessResponse(res, 200, {data: contact});
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }

  @Delete('/:id')
  @UseBefore(checkRole(['ROLE_ADMIN','ROLE_USER']))
  async deleteContact(@Param('id') id: string, @Res() res: Response) {
    try {
      const contact = await Contact.findByIdAndDelete(id);
      if (!contact) {
        return sendErrorResponse(res, 404, 'Contact not found');
      }
      return sendSuccessResponse(res, 200, 'Contact deleted');
    } catch (error: any) {
      return sendErrorResponse(res, 500, error.message);
    }
  }
}
