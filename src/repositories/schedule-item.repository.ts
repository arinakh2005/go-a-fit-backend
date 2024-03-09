import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { ScheduleItem } from '../entities/schedule-item.entity';

@CustomRepository(ScheduleItem)
export class ScheduleItemRepository extends BaseRepository<ScheduleItem> {
}
