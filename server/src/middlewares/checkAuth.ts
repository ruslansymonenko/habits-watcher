// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// interface Itoken {
//   userId: string;
//   iat: string;
//   exp: string;
// }

// export const checkAuth = (req: Request, res: Response, next: NextFunction): Response | void => {
//   const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

//   if (token) {
//     try {
//       const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET.toString() : '';

//       const decodedToken: Itoken = jwt.verify(token, JWT_SECRET);

//       req.userId = decodedToken.userId;

//       next();
//     } catch (error) {
//       return res.json({
//         message: 'No access',
//       });
//     }
//   } else {
//     return res.json({
//       message: 'No access',
//     });
//   }
// };
