// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { LoginDto } from './LoginDto';

@Injectable()
export class AuthService {
  async validateUser(loginDto: LoginDto) {
    if (!loginDto) {
      throw new Error('Invalid request body');
    }
    const { username, password } = loginDto;
    // your validation logic
    if (username === 'testuser' && password === 'testpassword') {
      return { message: 'Login successful' };
    }
    return { message: 'Invalid credentials' };
  }
}
