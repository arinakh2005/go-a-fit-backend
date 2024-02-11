import { TrainingStatus } from '../../enums/training-status.enum';
import { Group } from '../../entities/group.entity';
import { Coach } from '../../entities/coach.entity';

export class TrainingResponseDto {
    public date: Date;
    public status: TrainingStatus;
    public group: Group;
    public conductedCoach: Coach;
}