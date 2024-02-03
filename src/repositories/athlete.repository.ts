import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { Athlete } from '../entities/athlete.entity';

@CustomRepository(Athlete)
export class AthleteRepository extends BaseRepository<Athlete> {
}
