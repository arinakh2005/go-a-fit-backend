import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Group } from './group.entity';
import { OccasionType } from '../enums/occasion-type';
import { Coach } from './coach.entity';
import { Athlete } from './athlete.entity';

@Entity({ name: 'schedule-items' })
export class ScheduleItem extends BaseEntity {
  @Column({ name: 'start', type: 'date' })
  public start: Date;

  @Column({ name: 'end', type: 'date' })
  public end: Date;

  @Column({ name: 'title', type: 'varchar', length: 100 })
  public title: string;

  @Column({ name: 'occasion_type', type: 'enum', enum: OccasionType })
  public occasionType: OccasionType;

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