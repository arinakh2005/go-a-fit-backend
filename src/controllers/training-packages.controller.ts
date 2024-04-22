import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActiveUserTrainingPackageDto } from '../dtos/training-package/active-user-training-package.dto';
import { TrainingPackageService } from '../services/training-package.service';

@ApiTags('training-packages')
@Controller('api/training-packages')
export class TrainingPackagesController {
  constructor(private readonly trainingPackageService: TrainingPackageService) { }

  @Get('user/active/')
  public async getCoachGroupsById(
    @Query('userId') userId: string,
  ): Promise<ActiveUserTrainingPackageDto> {
    return await this.trainingPackageService.getCurrentUserPackage(userId);
  }
}
