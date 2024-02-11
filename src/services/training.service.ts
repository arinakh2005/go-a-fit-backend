import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { TrainingResponseDto } from '../dtos/training/training-response.dto';

@Injectable()
export class TrainingService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }

  public async findAll(): Promise<TrainingResponseDto[]> {
    return await this.unitOfWork.trainingRepository.find({
      relations: {
        group: true,
        conductedCoach: { user: true },
      }
    });
  }
}