import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { CustomRequestWithID } from '../types/userType';

// interface CustomRequest extends Request {
//   userId?: string;
// }

export const checkAuth = (
  req: CustomRequestWithID,
  res: Response,
  next: NextFunction,
): Response | void => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET.toString() : '';

      const decodedToken = jwt.verify(token, JWT_SECRET) as JwtPayload;

      if (decodedToken.userId) {
        req.userId = decodedToken.userId;
        next();
      } else {
        return res.json({
          message: 'No token',
        });
      }
    } catch (error) {
      return res.json({
        message: 'No access',
      });
    }
  } else {
    return res.json({
      message: 'No access',
    });
  }
};
