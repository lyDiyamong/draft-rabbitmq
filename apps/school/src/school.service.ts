import {  Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { SchoolDto } from './dto/school.dto';

@Injectable()
export class SchoolService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolDto: SchoolDto) {
    return this.prisma.school.create({
      data: schoolDto,
    });
  }

  async findAll() {
    return this.prisma.school.findMany();
  }
  async findOne(id: string) {
    const school = await this.prisma.school.findUnique({
      where: { id },
    });

    if (!school) {
      console.log('No data found');
      throw new NotFoundException('No data found');
    }

    return school
  }

  async update(id: string, schoolDto: SchoolDto) {
    return this.prisma.school.update({
      where: { id },
      data: schoolDto,
    });
  }

  async remove(id: string) {
    return this.prisma.school.delete({
      where: { id },
    });
  }
}
