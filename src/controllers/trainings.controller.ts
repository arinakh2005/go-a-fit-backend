import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TrainingService } from '../services/training.service';
import { TrainingResponseDto } from '../dtos/training/training-response.dto';

@ApiTags('trainings')
@Controller('api/trainings')
export class TrainingsController {
  constructor(private readonly trainingService: TrainingService) { }

  @Get()
  public async findAll(): Promise<TrainingResponseDto[]> {
    return await this.trainingService.findAll();
  }
}
