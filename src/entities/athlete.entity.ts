import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { TrainingPackage } from './training-package.entity';
import { UserAttendance } from './user-attendance.entity';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { ScheduleItem } from './schedule-item.entity';
import { AthleteGroup } from './athlete-group.entity';

@Entity({ name: 'athletes' })
export class Athlete extends BaseEntity {
  @OneToOne(() => User, (user) => user.athlete)
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @OneToMany(() => ScheduleItem, (schedule) => schedule.athlete)
  public scheduleItems: ScheduleItem[];

  @OneToMany(() => TrainingPackage, (trainingPackage) => trainingPackage.athlete)
  public trainingPackages: TrainingPackage[];

  @OneToMany(() => AthleteGroup, (athleteGroup) => athleteGroup.athlete)
  public athleteGroups: AthleteGroup[];

  @OneToMany(() => UserAttendance, (training) => training.athlete)
  public attendantTrainings: UserAttendance[];
}
