import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';

@Injectable()
export class ScheduleService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }
}