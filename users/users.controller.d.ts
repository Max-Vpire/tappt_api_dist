import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    GetAll(): Promise<import("./madel/users.madel").UsersTable[]>;
    AddUser(User: UserDto): Promise<import("./madel/users.madel").UsersTable>;
    GetOne(idx: string): Promise<import("./madel/users.madel").UsersTable>;
    GetByNumber(number: number): Promise<import("./madel/users.madel").UsersTable>;
    UpdateUser(idx: string, NewUser: UserDto): Promise<[affectedCount: number]>;
    DeleteUser(idx: string): Promise<number>;
}
