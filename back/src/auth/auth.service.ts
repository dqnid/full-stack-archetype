import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    console.log(username, pass);
    const user = await this.usersService.findOne(username);
    if (!user) throw new UnauthorizedException();

    const isSamePasswd = await bcrypt.compare(`${pass}`, `${user?.password}`);
    if (!isSamePasswd) throw new UnauthorizedException();

    const payload = {
      sub: user.id,
      username: user.username,
      roles: user.roles,
    };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
