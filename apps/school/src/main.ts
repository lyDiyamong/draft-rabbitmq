import { NestFactory } from '@nestjs/core';
import { SchoolModule } from './school.module';

async function bootstrap() {
  const app = await NestFactory.create(SchoolModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
