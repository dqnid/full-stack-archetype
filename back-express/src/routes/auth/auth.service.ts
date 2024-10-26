import { sign, verify } from "jsonwebtoken";
import UserService from "../users/users.service";

const secret_key = "asdf";

export class AuthService {
  constructor(private usersService: UserService) {}

  async signIn(username: string, password: string) {
    const user = await this.usersService.getUserByUsername(username);

    if (!user) {
      return null;
    }

    const payload = {
      sub: user.id,
      username: user.username,
      roles: user.roles,
      picture: user.picture,
    };

    const token = sign(payload, secret_key, { expiresIn: "1h" });
    return token;
  }

  async verifyToken(jwt: string) {
    const token = jwt.split(".")[1];
    if (!token) return false;
    try {
      const payload = verify(token, secret_key);
      return payload.username;
    } catch (e) {
      return false;
    }
  }
}
