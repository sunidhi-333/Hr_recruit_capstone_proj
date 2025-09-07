import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { LoginDto } from './LoginDto';

@Injectable()
export class AuthService {
  registerUser(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  validateUser(loginDto: LoginDto) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(username: string, password: string) {
    const newUser = new this.userModel({ username, password });
    return await newUser.save();
  }

  async findUserByUsername(username: string) {
    return this.userModel.findOne({ username });
  }
}
