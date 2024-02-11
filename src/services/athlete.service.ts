import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/user/create-user.dto';
import { SystemRole } from '../enums/system-role.enum';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { Athlete } from '../entities/athlete.entity';

@Injectable()
export class AthleteService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }

  // public async createAthlete(createUserDto: CreateUserDto): Promise<Athlete> {
  //   const work = async () => {
  //     const athlete: Athlete = {
  //       name: createUserDto.name,
  //       surname: createUserDto.surname,
  //       patronymic: createUserDto.patronymic || '',
  //       dateOfBirth: createUserDto.dateOfBirth,
  //       email: createUserDto.email,
  //       username: createUserDto.username,
  //       password: createUserDto.password,
  //       systemRole: SystemRole.Athlete,
  //       fitCentAmount: 0,
  //       fitOrders: [],
  //       notifications: [],
  //      } as Athlete;
  //
  //     return await this.unitOfWork.coachRepository.save(athlete);
  //   };
  //
  //   return await this.unitOfWork.doWork(work);
  // }
}