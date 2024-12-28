import { sign, verify } from "jsonwebtoken";
import UsersService from "../users/users.service";
import { compare } from "bcrypt";
import { generateRandomString } from "./auth.utils";
import { AUTH_KEY_SIZE } from "./auth.constants";
import { Role } from "../users/users.types";

export class AuthService {
  private secret_key: string;
  constructor(private usersService: UsersService) {
    this.secret_key = generateRandomString(AUTH_KEY_SIZE);
  }

  async signIn(username: string, password: string) {
    const user = await this.usersService.getUserByUsername(username);

    if (!user) {
      return null;
    }

    const isSamePasswd = await compare(`${password}`, `${user?.password}`);

    if (!isSamePasswd) return null;

    const payload = {
      sub: user.id,
      username: user.username,
      roles: user.roles,
      picture: user.picture,
    };

    const token = sign(payload, this.secret_key, { expiresIn: 60 * 60 });
    return token;
  }

  verifyToken(jwt: string) {
    const token = jwt.split(".")[1];
    if (!token) return false;
    try {
      const payload = verify(jwt, this.secret_key);
      if (payload instanceof Object)
        return {
          username: payload.username as string,
          roles: payload.roles as Role[],
        };
      else return false;
    } catch (e) {
      return false;
    }
  }
}
