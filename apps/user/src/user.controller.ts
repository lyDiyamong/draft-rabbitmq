import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';

@Controller('register')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(@Body() registerDto: RegisterDto) {
    return this.userService.register(registerDto);
  }
}
