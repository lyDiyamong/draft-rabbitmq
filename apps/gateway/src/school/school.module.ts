import { Module } from '@nestjs/common';
import { SchoolController } from './school.controller';

import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SCHOOL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL],
          queue: 'school_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [SchoolController],
})
export class SchoolModule {}
