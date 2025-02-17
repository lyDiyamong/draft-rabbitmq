import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegisterDocument = Register & Document;

@Schema()
export class Profile {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  dob: Date; // Date of birth

  @Prop({ required: true })
  phone: string; // Phone number
}

@Schema()
export class Register {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  schoolId: string;

  @Prop({ required: true })
  role: string; // e.g., 'student', 'teacher', etc.

  @Prop({ type: Profile, required: true }) // Nested profile field
  profile: Profile;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
export const RegisterSchema = SchemaFactory.createForClass(Register);
