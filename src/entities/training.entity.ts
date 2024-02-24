import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { TrainingStatus } from '../enums/training-status.enum';
import { Group } from './group.entity';
import { Coach } from './coach.entity';
import { Athlete } from './athlete.entity';

@Entity({ name: 'trainings' })
export class Training extends BaseEntity {
  @Column({ name: 'start_at', type: 'date' })
  public startAt: Date;

  @Column({ name: 'end_at', type: 'date' })
  public endAt: Date;

  @Column({ name: 'status', type: 'enum', enum: TrainingStatus, default: TrainingStatus.Planned })
  public status: TrainingStatus;

  @ManyToOne(() => Group, (group) => group.trainings)
  @JoinColumn({ name: 'group_id' })
  public group: Group;

  @ManyToOne(() => Coach, (coach) => coach.conductedTrainings)
  @JoinColumn({ name: 'conducted_coach_id' })
  public conductedCoach: Coach;

  @ManyToMany(() => Athlete, (athlete) => athlete.attendantTrainings)
  public attendantAthletes: Athlete[];
}
