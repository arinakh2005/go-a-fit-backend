import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { UserAttendance } from './user-attendance.entity';
import { Group } from './group.entity';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { ScheduleItem } from './schedule-item.entity';

@Entity({ name: 'coaches' })
export class Coach extends BaseEntity {
  @Column({ name: 'activities', type: 'varchar', length: 200 })
  public activities: string;

  @Column({ name: 'education', type: 'varchar', length: 500 })
  public education: string;

  @Column({ name: 'rewards', type: 'varchar', length: 500 })
  public rewards: string;

  @Column({ name: 'motto', type: 'varchar', length: 200 })
  public motto: string;

  @OneToOne(() => User, (user) => user.coach)
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @OneToMany(() => ScheduleItem, (schedule) => schedule.coach)
  public scheduleItems: ScheduleItem[];

  @OneToMany(() => Group, (group) => group.coach)
  public groups: Group[];

  @OneToMany(() => UserAttendance, (training) => training.conductedCoach)
  public conductedTrainings: UserAttendance[];
}
