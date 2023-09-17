import { IRoute } from '../router/Routes';

// export interface IManageRoutes {
//   privateRoutesPaths: string[];
//   publicRoutesPaths: string[];
// }

// export const manageRoutes = (routes: IRoute[]): IManageRoutes => {
//   const privateRoutes: string[] = [];
//   const publicRoutes: string[] = [];

//   for (const route of routes) {
//     if (route.private === true) {
//       privateRoutes.push(route.path);
//     } else if (route.private === false) {
//       publicRoutes.push(route.path);
//     }
//   }

//   const managedRoutes: IManageRoutes = {
//     privateRoutesPaths: privateRoutes,
//     publicRoutesPaths: publicRoutes,
//   };

//   return managedRoutes;
// };
