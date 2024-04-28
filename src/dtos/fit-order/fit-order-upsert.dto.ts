import { IsArray, IsEnum, IsString, IsUUID, MaxLength, ValidateNested } from 'class-validator';
import { Optional } from '@nestjs/common';
import { FitOrderStatus } from '../../enums/fit-order-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { FitOrderProductDto } from './fit-order-product.dto';
import { Type } from 'class-transformer';

export class FitOrderUpsertDto {
  @ApiProperty()
  @IsString()
  @MaxLength(500)
  @Optional()
  public comment?: string;

  @ApiProperty()
  @IsEnum(FitOrderStatus)
  @Optional()
  public status?: FitOrderStatus;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FitOrderProductDto)
  public fitOrderProducts: FitOrderProductDto[];

  @ApiProperty()
  @IsUUID()
  public userId: string;
}