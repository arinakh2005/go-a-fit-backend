import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { Athlete } from '../entities/athlete.entity';

@Injectable()
export class AthleteService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }

  public async findAll(): Promise<Athlete[]> {
    return await this.unitOfWork.athleteRepository.find({
      relations: { user: true },
    });
  }
}