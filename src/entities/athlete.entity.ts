import { Entity, ManyToMany, OneToMany } from 'typeorm';
import { TrainingPackage } from './training-package.entity';
import { Training } from './training.entity';
import { User } from './user.entity';
import { Group } from './group.entity';

@Entity()
export class Athlete extends User {
  @OneToMany(() => TrainingPackage, (trainingPackage) => trainingPackage.athlete)
  public trainingPackages: TrainingPackage[];

  @ManyToMany(() => Group, (group) => group.athletes)
  public groups: Group[];

  @ManyToMany(() => Training, (training) => training.attendantAthletes)
  public attendantTrainings: Training[];
}
