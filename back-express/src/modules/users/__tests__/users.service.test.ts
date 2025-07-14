import UsersService from "../users.service";
import { Role, User } from "../users.types";

const user_list_mock: User[] = [
    {
        id: 1,
        username: "test",
        password: "asdf",
        roles: [Role.Admin],
        picture: "",
        created_at: "now",
    },
];

describe("users service", () => {
    const usersService = new UsersService();
    it("returns all users", () => {});
});
