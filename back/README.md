## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript archetype repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Authentication functionality

All done with the `Auth` decorator, which lets you determine a list of authorized roles.

The are 3 available roles:

- Public: no role nor user needed
- User
- Admin

These can be extended by simply adding new elements to the `src/users/roles/role.enum.ts` enumeration.

```ts
@Auth(Role.Public)
@Get()
getHello(): string { return "Hello!" }
```

### JWT

User login is managed by a `JWT` based structure. The client must send both username and password in the body of a `POST` method at `/auth/login`, which would return a `JWT` in case of success. This token must be used to interact with the server on every non-public route. Internally the server assumes the user passwords are stored hashed on a [Mariadb](https://mariadb.org/) database.

## Stay in touch

- Author - [Daniel Heras Quesada](https://dqnid.com)
- Twitter - [@nestframework](https://twitter.com/nestframework)
- Linkedin - [daniel-heras-quesada](https://www.linkedin.com/in/daniel-heras-quesada/)

## License

This archetype is [MIT licensed](LICENSE).
