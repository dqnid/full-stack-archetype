import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.routes";
import { Role } from "../users/users.types";
import { ResponseError } from "../../utils/response/response-error.model";
import config from "../../config";

type Permissions = {
  roles: Array<Role>;
  resource: string;
  actions: Array<"get" | "put" | "post" | "delete" | "config">;
};

async function authorization(req: Request, res: Response, next: NextFunction) {
  const resource = req.url.replace(config.baseRoute, "");
  const isPublic = !!authorizationTable
    .find((permission) => permission.resource.startsWith(resource))
    ?.roles.includes(Role.Public);

  if (isPublic) {
    return next();
  }
  const authHeader = req.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    res.status(401);
    return res.send(new ResponseError(401));
  }

  const user = authService.verifyToken(token);
  if (user && user instanceof Object) {
    // FIXME: this check is wrong, needs to take into account the resource
    const authorized = authorizationTable.find((auth) =>
      user.roles.some((role) => auth.roles.includes(role)),
    );
    if (authorized) {
      return next();
    }
  }
  res.status(401);
  return res.send(new ResponseError(401));
}

// TODO: resource should be a regex
const authorizationTable: Permissions[] = [
  {
    roles: [Role.Public],
    resource: "/auth/login",
    actions: ["post"],
  },
  {
    roles: [Role.Admin],
    resource: "/users",
    actions: ["get", "put", "post", "delete"],
  },
  {
    roles: [Role.User],
    resource: "/users",
    actions: ["get"],
  },
];

export { authorization as authorizationMiddleware };
