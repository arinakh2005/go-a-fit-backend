import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { Training } from '../entities/training.entity';

@CustomRepository(Training)
export class TrainingRepository extends BaseRepository<Training> {
}
