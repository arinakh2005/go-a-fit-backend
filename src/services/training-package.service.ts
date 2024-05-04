import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { ActiveUserTrainingPackageDto } from '../dtos/training-package/active-user-training-package.dto';

@Injectable()
export class TrainingPackageService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }

  public async getCurrentUserPackage(userId: string): Promise<ActiveUserTrainingPackageDto | null> {
    const userPackages = await this.unitOfWork.trainingPackageRepository.find({
      where: { athlete: { user: { id: userId }}},
      relations: {
        athlete: { user: true },
        gymSubscription: true,
      },
    });

    const latestPackage = userPackages.sort((trainingPackage, trainingPackageToCompare) =>
      new Date(trainingPackageToCompare.expirationDate).getDate() - new Date(trainingPackage.expirationDate).getDate(),
    )?.[0];

    if (!latestPackage) return null;

    return {
      title: latestPackage.gymSubscription.title,
      description: latestPackage.gymSubscription.description,
      activityType: latestPackage.gymSubscription.activityType,
      beginningDate: latestPackage.beginningDate,
      expirationDate: latestPackage.expirationDate,
      totalTrainingsAmount: latestPackage.trainingsAmount,
      usedTrainingsAmount: latestPackage.usedTrainingsAmount,
      missedTrainingsAmount: latestPackage.missedTrainingsAmount,
    };
  }
}