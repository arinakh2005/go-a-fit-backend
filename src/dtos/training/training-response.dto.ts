import { OccasionStatus } from '../../enums/occasion-status.enum';
import { Group } from '../../entities/group.entity';
import { Coach } from '../../entities/coach.entity';

export class TrainingResponseDto {
    public startAt: Date;
    public endAt: Date;
    public status: OccasionStatus;
    public group: Group;
    public conductedCoach: Coach;
}