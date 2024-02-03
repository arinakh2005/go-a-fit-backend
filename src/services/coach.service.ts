import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/user/create-user.dto';
import { SystemRole } from '../enums/system-role.enum';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { Coach } from '../entities/coach.entity';

@Injectable()
export class CoachService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }

  public async createCoach(createUserDto: CreateUserDto): Promise<Coach> {
    const work = async () => {
      const coach: Coach = {
        name: createUserDto.name,
        surname: createUserDto.surname,
        patronymic: createUserDto.patronymic || '',
        dateOfBirth: createUserDto.dateOfBirth,
        email: createUserDto.email,
        username: createUserDto.username,
        password: createUserDto.password,
        systemRole: SystemRole.Athlete,
        fitCentAmount: 0,
        fitOrders: [],
        notifications: [],
        groups: [],
        conductedTrainings: [],
       } as Coach;

      return await this.unitOfWork.coachRepository.save(coach);
    };

    return await this.unitOfWork.doWork(work);
  }
}