import { IsAlphanumeric, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches, MinLength } from 'class-validator';
import { SystemRole } from '../../enums/system-role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty()
  public name: string;

  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Surname must have at least 2 characters.' })
  @IsNotEmpty()
  public surname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  public patronymic?: string;

  @ApiProperty()
  @IsDateString()
  public dateOfBirth: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid email.' })
  public email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5, { message: 'Username must have at least 5 characters.' })
  @IsAlphanumeric(null, { message: 'Username does not allow other than alpha numeric chars.' })
  public username: string;

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-zA-Z]).{8,20}$/, { message: `Password must contain a minimum of 8 and a maximum of 20 characters, at least one letter` })
  public password: string;

  @ApiProperty()
  @IsOptional()
  public imageUrl?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(SystemRole)
  public systemRole: SystemRole;
}