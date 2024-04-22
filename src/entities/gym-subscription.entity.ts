import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ActivityType } from '../enums/activity-type';
import { TrainingPackage } from './training-package.entity';

@Entity({ name: 'gym-subscriptions' })
export class GymSubscription extends BaseEntity {
  @Column({ name: 'title', type: 'varchar', length: 50 })
  public title: string;

  @Column({ name: 'description', type: 'varchar', length: 200 })
  public description: string;

  @Column({ name: 'activity_type', type: 'enum', enum: ActivityType })
  public activityType: ActivityType;

  @Column({ name: 'available_trainings', type: 'int', default: 8 })
  public availableTrainings: number;

  @OneToMany(() => TrainingPackage, (trainingPackage) => trainingPackage.gymSubscription)
  public trainingPackages: TrainingPackage[];
}
