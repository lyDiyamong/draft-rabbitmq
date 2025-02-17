import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SchoolService } from './school.service';
import { SchoolDto } from './dto/school.dto';

@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  // Create school (Responding to gateway's 'create_school' message)
  @MessagePattern('create_school')
  async create(schoolDto: SchoolDto) {
    return this.schoolService.create(schoolDto);
  }

  // Get all schools (Responding to gateway's 'get_school_data' message)
  @MessagePattern('get_school_data')
  async findAll() {
    return this.schoolService.findAll();
  }

  // Get a single school by ID (Responding to gateway's 'get_one_school_data' message)
  @MessagePattern('get_one_school_data')
  async findOne(@Payload() data: any) {
    return this.schoolService.findOne(data.id);
  }

  // Update school by ID (Responding to gateway's 'update_school' message)
  @MessagePattern('update_school')
  async update(data: { id: string; schoolDto: SchoolDto }) {
    return this.schoolService.update(data.id, data.schoolDto);
  }

  // Delete school by ID (Responding to gateway's 'delete_school' message)
  @MessagePattern('delete_school')
  async remove(data: { id: string }) {
    return this.schoolService.remove(data.id);
  }
}
