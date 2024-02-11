import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Athlete } from './athlete.entity';
import { Coach } from './coach.entity';
import { Training } from './training.entity';
import { Schedule } from './schedule.entity';

@Entity({ name: 'groups' })
export class Group extends BaseEntity {
  @Column({ name: 'name', type: 'varchar', length: 100 })
  public name: string;

  @ManyToMany(() => Athlete, (athlete) => athlete.groups)
  public athletes: Athlete[];

  @ManyToOne(() => Coach, (coach) => coach.groups)
  @JoinColumn({ name: 'coach_id' })
  public coach: Coach;

  @OneToMany(() => Schedule, (schedule) => schedule.group)
  public schedules: Schedule[];

  @OneToMany(() => Training, (training) => training.group)
  public trainings: Training[];
}
