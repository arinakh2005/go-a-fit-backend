import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { Schedule } from '../entities/schedule.entity';

@CustomRepository(Schedule)
export class ScheduleRepository extends BaseRepository<Schedule> {
}
