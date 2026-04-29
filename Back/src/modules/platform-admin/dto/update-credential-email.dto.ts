import { IsEmail } from 'class-validator';

export class UpdateCredentialEmailDto {
  @IsEmail()
  email!: string;
}
