import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Group } from './group.entity';
import { BaseEntity } from './base.entity';
import { Athlete } from './athlete.entity';

@Entity({ name: 'athletes-groups' })
export class AthleteGroup extends BaseEntity {
  @ManyToOne(() => Athlete, (athlete) => athlete.athleteGroups)
  @JoinColumn({ name: 'athlete_id' })
  public athlete: Athlete;

  @ManyToOne(() => Group, (group) => group.athletes)
  @JoinColumn({ name: 'group_id' })
  public group: Group;
}
