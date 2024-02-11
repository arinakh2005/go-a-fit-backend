import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Weekday } from '../enums/weekday.enum';
import { Group } from './group.entity';

@Entity({ name: 'schedule' })
export class Schedule extends BaseEntity {
  @Column({ name: 'start_at', type: 'date' })
  public startTime: Date;

  @Column({ name: 'end_at', type: 'date' })
  public endTime: Date;

  @Column({ name: 'day_of_week', type: 'enum', enum: Weekday })
  public dayOfWeek: Weekday;

  @Column({ name: 'date_until', type: 'date' })
  public dateUntil: Date;

  @ManyToOne(() => Group, (group) => group.schedules)
  @JoinColumn({ name: 'group_id' })
  public group: Group;
}
