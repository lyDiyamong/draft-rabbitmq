import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Register, RegisterDocument } from './models/register.model';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Register.name) private registerModel: Model<RegisterDocument>,
  ) {}

  async register(registerDto: RegisterDto): Promise<Register> {
    const createdUser = await this.registerModel.create(registerDto);
    return createdUser.toObject();
  }
  async getAll(): Promise<Register[]> {
    return this.registerModel.find();
  }
}
