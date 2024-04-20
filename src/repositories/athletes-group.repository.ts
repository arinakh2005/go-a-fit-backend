import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { AthleteGroup } from '../entities/athlete-group.entity';

@CustomRepository(AthleteGroup)
export class AthletesGroupRepository extends BaseRepository<AthleteGroup> {
}
