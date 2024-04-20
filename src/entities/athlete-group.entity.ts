import { Entity, JoinColumn, ManyToMany } from 'typeorm';
import { Group } from './group.entity';
import { BaseEntity } from './base.entity';
import { Athlete } from './athlete.entity';

@Entity({ name: 'athletes-groups' })
export class AthleteGroup extends BaseEntity {
  @ManyToMany(() => Athlete, (athlete) => athlete.athleteGroups)
  @JoinColumn({ name: 'athlete_id' })
  public athlete: Athlete;

  @ManyToMany(() => Group, (group) => group.athleteGroups)
  @JoinColumn({ name: 'group_id' })
  public group: Group;
}
