import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Athlete } from './athlete.entity';
import { GymSubscription } from './gym-subscription.entity';

@Entity({ name: 'training-packages' })
export class TrainingPackage extends BaseEntity {
  @Column({ name: 'beginning_date', type: 'date' })
  public beginningDate: Date;

  @Column({ name: 'expiration_date', type: 'date' })
  public expirationDate: Date;

  @Column({ name: 'trainings_amount', type: 'int', default: 1 })
  public trainingsAmount: number;

  @Column({ name: 'used_trainings_amount', type: 'int', default: 0 })
  public usedTrainingsAmount: number;

  @Column({ name: 'missed_trainings_amount', type: 'int', default: 0 })
  public missedTrainingsAmount: number;

  @ManyToOne(() => Athlete, (athlete) => athlete.trainingPackages)
  @JoinColumn({ name: 'athlete_id' })
  public athlete: Athlete;

  @ManyToOne(() => GymSubscription, (gymSubscription) => gymSubscription.trainingPackages)
  @JoinColumn({ name: 'gym_subscription_id' })
  public gymSubscription: GymSubscription;
}
