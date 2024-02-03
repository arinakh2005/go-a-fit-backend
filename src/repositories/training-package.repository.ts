import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { TrainingPackage } from '../entities/training-package.entity';

@CustomRepository(TrainingPackage)
export class TrainingPackageRepository extends BaseRepository<TrainingPackage> {
}
