import { Entity, OneToMany } from 'typeorm';
import { Training } from './training.entity';
import { User } from './user.entity';
import { Group } from './group.entity';

@Entity()
export class Coach extends User {
  @OneToMany(() => Group, (group) => group.coach)
  public groups: Group[];

  @OneToMany(() => Training, (training) => training.conductedCoach)
  public conductedTrainings: Training[];
}
