import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class ProfileDto {
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsDateString()
    dob: Date; // Date of birth

    @IsNotEmpty()
    @IsString()
    phoneNumber: string; // Phone number
}