import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Training } from './training.entity';
import { Group } from './group.entity';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity({ name: 'coaches' })
export class Coach extends BaseEntity {
  @OneToOne(() => User, (user) => user.coach)
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @OneToMany(() => Group, (group) => group.coach)
  public groups: Group[];

  @OneToMany(() => Training, (training) => training.conductedCoach)
  public conductedTrainings: Training[];
}
