import { IsBoolean, IsDateString, IsEnum, IsUUID } from 'class-validator';
import { Optional } from '@nestjs/common';
import { OccasionType } from '../../enums/occasion-type';

export class ScheduleItemUpsertDto {
  @IsDateString()
  public start: string;

  @IsDateString()
  public end: string;

  @Optional()
  public title?: string;

  @IsEnum(OccasionType)
  public occasionType: OccasionType;

  @IsBoolean()
  public isAllDay?: boolean;

  @IsUUID()
  public coachId?: string;

  @IsUUID()
  public athleteId?: string;

  @IsUUID()
  public groupId?: string;
}