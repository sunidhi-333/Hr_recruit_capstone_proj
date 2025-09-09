import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './LoginDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    console.log('Received loginDto:', loginDto);
    return this.authService.validateUser(loginDto);
  }

  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    return this.authService.registerUser(username, password);
  }
}
