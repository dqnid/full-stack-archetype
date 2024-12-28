import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ExampleModule } from './example/example.module';

import { User } from './users/entities/user.entity';
import { Example } from './example/entities/example.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    ExampleModule,
    ThrottlerModule.forRoot([
      {
        ttl: 10000,
        limit: 20,
      },
    ]),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql' | 'mariadb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_MAIN,
      entities: [User, Example],
      synchronize: false,
      connectTimeout: 20000,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
