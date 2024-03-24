import { IsAlphanumeric, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches, MinLength } from 'class-validator';
import { SystemRole } from '../../enums/system-role.enum';

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty()
  public name: string;

  @IsString()
  @MinLength(2, { message: 'Surname must have at least 2 characters.' })
  @IsNotEmpty()
  public surname: string;

  @IsString()
  @IsOptional()
  public patronymic?: string;

  @IsDateString()
  public dateOfBirth: Date;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid email.' })
  public email: string;

  @IsNotEmpty()
  @MinLength(5, { message: 'Username must have at least 5 characters.' })
  @IsAlphanumeric(null, { message: 'Username does not allow other than alpha numeric chars.' })
  public username: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[a-zA-Z]).{8,20}$/, { message: `Password must contain a minimum of 8 and a maximum of 20 characters, at least one letter` })
  public password: string;

  @IsOptional()
  public imageUrl?: string;

  @IsNotEmpty()
  @IsEnum(SystemRole)
  public systemRole: SystemRole;
}