import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    Register(User: RegisterDto): Promise<void>;
    Login(User: LoginDto): Promise<{
        token: string;
    }>;
}
