import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { LoginDto } from './LoginDto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async registerUser(username: string, password: string) {
    // Check if user already exists
    const existingUser = await this.userModel.findOne({ username });
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }
    const newUser = new this.userModel({ username, password });
    return newUser.save();
  }

  async validateUser(loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.userModel.findOne({ username });
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid username or password');
    }
    // You can return user info or JWT token here
    return { message: 'Login successful', userId: user._id, username: user.username };
  }
}
