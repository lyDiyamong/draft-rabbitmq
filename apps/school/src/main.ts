import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SchoolModule } from './school.module';
import { configDotenv } from 'dotenv';

async function bootstrap() {
  configDotenv()
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SchoolModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL],
        queue: 'school_queue',
        queueOptions: { durable: false },
      },
    },
  );

  await app.listen();
  console.log('🎓 School service is running...');
}
bootstrap();
