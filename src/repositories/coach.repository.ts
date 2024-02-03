import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { Coach } from '../entities/coach.entity';

@CustomRepository(Coach)
export class CoachRepository extends BaseRepository<Coach> {
}
