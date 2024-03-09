import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { ScheduleItem } from '../entities/schedule-item.entity';

@Injectable()
export class ScheduleItemService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }

  public async findAll(): Promise<ScheduleItem[]> {
    return await this.unitOfWork.scheduleItemRepository.find();
  }
}