import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { configDotenv } from 'dotenv';
configDotenv();
@Module({
  imports: [MongooseModule.forRoot(`${process.env.MONGO_URI}reservation`)],
})
export class DatabaseModule {}
