import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Group } from './group.entity';
import { OccasionType } from '../enums/occasion-type';
import { Coach } from './coach.entity';
import { Athlete } from './athlete.entity';
import { OccasionStatus } from '../enums/occasion-status.enum';

@Entity({ name: 'schedule-items' })
export class ScheduleItem extends BaseEntity {
  @Column({ name: 'start', type: 'varchar' })
  public start: string;

  @Column({ name: 'end', type: 'varchar' })
  public end: string;

  @Column({ name: 'title', type: 'varchar', length: 100 })
  public title: string;

  @Column({ name: 'occasion_type', type: 'enum', enum: OccasionType })
  public occasionType: OccasionType;

  @Column({ name: 'occasion_status', type: 'enum', enum: OccasionStatus })
  public occasionStatus: OccasionStatus;

  @Column({ name: 'all_day', type: 'boolean', default: false })
  public isAllDay: boolean;

  @ManyToOne(() => Group, (group) => group.scheduleItems)
  @JoinColumn({ name: 'group_id' })
  public group: Group;

  @ManyToOne(() => Coach, (coach) => coach.scheduleItems)
  @JoinColumn({ name: 'coach_id' })
  public coach: Coach;

  @ManyToOne(() => Athlete, (athlete) => athlete.scheduleItems)
  @JoinColumn({ name: 'athlete_id' })
  public athlete: Athlete;
}