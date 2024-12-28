import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.routes";
import { Role } from "../users/users.types";
import { ResponseError } from "../../utils/response/response-error.model";
import config from "../../config";

async function authorization(req: Request, res: Response, next: NextFunction) {
  const resource = req.url.replace(config.baseRoute, "");
  const isPublic = authorizationTable.some((permission) => {
    const regex = new RegExp(permission.resource);
    return (
      regex.test(resource) &&
      permission.actions.includes(req.method as HttpMethod) &&
      permission.roles.includes(Role.Public)
    );
  });

  if (isPublic) {
    return next();
  }

  const authHeader = req.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (token == null) {
    res.status(401);
    return res.send(new ResponseError(401));
  }

  const user = authService.verifyToken(token);
  if (user && user instanceof Object) {
    const authorized = authorizationTable.some((permission) => {
      const regex = new RegExp(permission.resource);
      return (
        regex.test(resource) &&
        permission.roles.some((role) => user.roles.includes(role)) &&
        permission.actions.includes(req.method as HttpMethod)
      );
    });
    if (authorized) {
      return next();
    }
  }
  res.status(401);
  return res.send(new ResponseError(401));
}

type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "OPTIONS"
  | "HEAD";
type Permissions = {
  roles: Array<Role>;
  resource: string;
  actions: Array<HttpMethod>;
};

const authorizationTable: Permissions[] = [
  {
    roles: [Role.Public],
    resource: "^/auth.*", // begins with /auth (is auth would be ^\/auth$)
    actions: ["POST"],
  },
  {
    roles: [Role.Admin],
    resource: "^/users.*",
    actions: ["GET", "PUT", "POST", "DELETE"],
  },
  {
    roles: [Role.User],
    resource: "^/users.*",
    actions: ["GET"],
  },
  {
    roles: [Role.Public],
    resource: "^/example.*",
    actions: ["GET", "OPTIONS"],
  },
];

export { authorization as authorizationMiddleware };
