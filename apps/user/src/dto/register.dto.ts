import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ProfileDto } from './profile.dto';

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    role: string; // e.g., 'student', 'teacher', etc.

    @IsNotEmpty()
    profile: ProfileDto; // Include the profile field
}