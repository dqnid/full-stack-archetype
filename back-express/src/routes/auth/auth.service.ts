import { sign, verify } from "jsonwebtoken";
import UsersService from "../users/users.service";
import { compare } from "bcrypt";
import { generateRandomString } from "./auth.utils";
import { AUTH_KEY_SIZE } from "./auth.constants";

export class AuthService {
  private secret_key: string;
  constructor(private usersService: UsersService) {
    this.secret_key = generateRandomString(AUTH_KEY_SIZE);
  }

  async signIn(username: string, password: string) {
    console.log("__LOGIN", { username, password });
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

    const token = sign(payload, this.secret_key, { expiresIn: "1h" });
    return token;
  }

  async verifyToken(jwt: string) {
    const token = jwt.split(".")[1];
    if (!token) return false;
    try {
      const payload = verify(token, this.secret_key);
      if (payload instanceof Object) return payload.username;
      else return payload;
    } catch (e) {
      return false;
    }
  }
}
