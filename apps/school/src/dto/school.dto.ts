import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SchoolDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
} 