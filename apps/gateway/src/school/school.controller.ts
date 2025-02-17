import { SchoolDto } from './../../../school/src/dto/school.dto';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Controller('school-service')
export class SchoolController {
  constructor(
    @Inject('SCHOOL_SERVICE') private readonly schoolService: ClientProxy,
  ) {}

  // Create a new school
  @Post()
  async create(@Body() schoolDto: SchoolDto) {
    return firstValueFrom(this.schoolService.send('create_school', schoolDto));
  }

  // Get all schools
  @Get('schools')
  async getAllSchools() {
    return firstValueFrom(this.schoolService.send('get_school_data', {}));
  }

  // Get a specific school by ID
  @Get('school/:id')
  async getOneSchool(@Param('id') id: string) {
    return lastValueFrom(
      this.schoolService.send('get_one_school_data', { id }),
    );
  }

  // Update a school by ID
  @Put('school/:id')
  async updateSchool(@Param('id') id: string, @Body() schoolDto: SchoolDto) {
    return firstValueFrom(
      this.schoolService.send('update_school_data', { id, schoolDto }),
    );
  }

  // Delete a school by ID
  @Delete('school/:id')
  async removeSchool(@Param('id') id: string) {
    return firstValueFrom(
      this.schoolService.send('remove_school_data', { id }),
    );
  }
}
