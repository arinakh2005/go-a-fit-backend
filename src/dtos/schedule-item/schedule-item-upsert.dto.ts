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
  occasionType: OccasionType;

  @IsBoolean()
  isAllDay?: boolean;

  @IsUUID()
  coachId?: string;

  @IsUUID()
  athleteId?: string;

  @IsUUID()
  groupId?: string;
}