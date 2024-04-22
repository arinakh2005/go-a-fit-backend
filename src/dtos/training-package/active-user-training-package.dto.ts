import { ActivityType } from '../../enums/activity-type';

export class ActiveUserTrainingPackageDto {
  title: string;
  description: string;
  beginningDate: Date;
  expirationDate: Date;
  activityType: ActivityType;
  totalTrainingsAmount: number;
  usedTrainingsAmount: number;
  missedTrainingsAmount: number;
}