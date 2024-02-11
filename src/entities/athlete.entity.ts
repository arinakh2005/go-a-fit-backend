import { Entity, JoinColumn, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { TrainingPackage } from './training-package.entity';
import { Training } from './training.entity';
import { Group } from './group.entity';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity({ name: 'athletes' })
export class Athlete extends BaseEntity {
  @OneToOne(() => User, (user) => user.athlete)
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @OneToMany(() => TrainingPackage, (trainingPackage) => trainingPackage.athlete)
  public trainingPackages: TrainingPackage[];

  @ManyToMany(() => Group, (group) => group.athletes)
  @JoinColumn({ name: 'group_id' })
  public groups: Group[];

  @ManyToMany(() => Training, (training) => training.attendantAthletes)
  public attendantTrainings: Training[];
}
