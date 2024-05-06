import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { UserAttendance } from '../entities/user-attendance.entity';

@Injectable()
export class UserAttendanceService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }

  public async findByAthleteId(athleteId: string): Promise<UserAttendance[]> {
    return await this.unitOfWork.userAttendanceRepository.find({
      where: { athlete: { id: athleteId }},
      relations: { conductedCoach: { user: true }},
    });
  }
}