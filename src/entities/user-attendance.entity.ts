import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Group } from './group.entity';
import { Coach } from './coach.entity';
import { Athlete } from './athlete.entity';

@Entity({ name: 'users-attendances' })
export class UserAttendance extends BaseEntity {
  @Column({ name: 'start_at', type: 'varchar' })
  public startAt: string;

  @Column({ name: 'end_at', type: 'varchar' })
  public endAt: string;

  @Column({ name: 'visited', type: 'boolean', default: false })
  public isVisited: boolean;

  @Column({ name: 'working_off_allowed', type: 'boolean', default: false })
  public isWorkingOffAllowed: boolean;

  @ManyToOne(() => Group, (group) => group.trainings)
  @JoinColumn({ name: 'group_id' })
  public group: Group;

  @ManyToOne(() => Coach, (coach) => coach.conductedTrainings)
  @JoinColumn({ name: 'conducted_coach_id' })
  public conductedCoach: Coach;

  @ManyToOne(() => Athlete, (athlete) => athlete.attendantTrainings)
  @JoinColumn({ name: 'athlete_id' })
  public athlete: Athlete;
}
