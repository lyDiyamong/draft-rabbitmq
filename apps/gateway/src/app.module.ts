import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configDotenv } from 'dotenv';
import { DatabaseModule } from '@app/common';
import { SchoolModule } from './school/school.module';
configDotenv();

@Module({
  imports: [DatabaseModule, SchoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
