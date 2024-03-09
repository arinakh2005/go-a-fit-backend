import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { Group } from '../entities/group.entity';

@Injectable()
export class GroupService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }

  public async findAll(): Promise<Group[]> {
    return await this.unitOfWork.groupRepository.find({
      relations: { coach: true },
    });
  }
}