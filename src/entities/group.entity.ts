import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Coach } from './coach.entity';
import { Training } from './training.entity';
import { ScheduleItem } from './schedule-item.entity';
import { AthleteGroup } from './athlete-group.entity';

@Entity({ name: 'groups' })
export class Group extends BaseEntity {
  @Column({ name: 'title', type: 'varchar', length: 50 })
  public title: string;

  @Column({ name: 'description', type: 'varchar', length: 100 })
  public description: string;

  @Column({ name: 'color', type: 'varchar', length: 15 })
  public color: string;

  @ManyToOne(() => Coach, (coach) => coach.groups)
  @JoinColumn({ name: 'coach_id' })
  public coach: Coach;

  @ManyToMany(() => AthleteGroup, (athleteGroup) => athleteGroup.group)
  public athleteGroups: AthleteGroup[];

  @OneToMany(() => ScheduleItem, (schedule) => schedule.group)
  public scheduleItems: ScheduleItem[];

  @OneToMany(() => Training, (training) => training.group)
  public trainings: Training[];
}
