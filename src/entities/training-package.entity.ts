import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Athlete } from './athlete.entity';

@Entity()
export class TrainingPackage extends BaseEntity {
  @Column({ name: 'beginning_date', type: 'date' })
  public beginningDate: Date;

  @Column({ name: 'expiration_date', type: 'date' })
  public expirationDate: Date;

  @Column({ name: 'available_trainings', type: 'number', default: 8 })
  public availableTrainings: number;

  @ManyToOne(() => Athlete, (athlete) => athlete.trainingPackages)
  @JoinColumn({ name: 'athlete_id' })
  public athlete: Athlete;
}
