import { Module } from '@nestjs/common';
import { DatabaseModule } from 'libs/common/src/database/database.module';
import { AnotherService } from './another.service';

@Module({
    imports: [DatabaseModule], // Import the DatabaseModule
    providers: [AnotherService],
})
export class AnotherServiceModule {} 