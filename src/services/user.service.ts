import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { CreateUserDto } from '../dtos/user/create-user.dto';
import { User } from '../entities/user.entity';
import { Coach } from '../entities/coach.entity';
import { Athlete } from '../entities/athlete.entity';
import { SystemRole } from '../enums/system-role.enum';
import { RetrieveUserDto } from '../dtos/user/retrieve-user.dto';
import { GoogleDriveService } from 'nestjs-googledrive-upload';

@Injectable()
export class UserService extends BaseService {
  constructor(
    protected readonly unitOfWork: UnitOfWorkService,
    private readonly googleDriveService: GoogleDriveService,
  ) {
    super(unitOfWork);
  }

  public async findAll(): Promise<User[]> {
    return await this.unitOfWork.userRepository.find();
  }

  public async findByUsername(username: string): Promise<User> {
    return await this.unitOfWork.userRepository.findOneBy({ username });
  }

  public async findById(id: string): Promise<RetrieveUserDto> {
    const user = await this.unitOfWork.userRepository.findById(id);
    const retrievedUserData: RetrieveUserDto = {
      name: user.name,
      surname: user.surname,
      patronymic: user?.patronymic,
      dateOfBirth: user.dateOfBirth,
      email: user.email,
      username: user.username,
      systemRole: user.systemRole,
      fitCentAmount: user.fitCentAmount,
      notifications: user.notifications,
      fitOrders: user.fitOrders,
      athlete: null,
      coach: null,
    };

    if (user.imageUrl) retrievedUserData.imageUrl = user.imageUrl;
    if (user.systemRole === SystemRole.Athlete) retrievedUserData.athlete = user.athlete;
    if (user.systemRole === SystemRole.Coach) retrievedUserData.coach = user.coach;

    return retrievedUserData;
  }

  public async create(createUserDto: CreateUserDto): Promise<RetrieveUserDto> {
    const work = async () => {
      const userToCreate: User = {
        name: createUserDto.name,
        surname: createUserDto.surname,
        patronymic: createUserDto.patronymic,
        dateOfBirth: createUserDto.dateOfBirth,
        email: createUserDto.email,
        username: createUserDto.username,
        password: createUserDto.password,
        imageUrl: createUserDto.imageUrl || '',
      } as User;

      const createdUser = await this.unitOfWork.userRepository.save(userToCreate);

      if (createdUser.systemRole === SystemRole.Coach) {
        const coachToCreate: Coach = {
          user: createdUser,
          scheduleItems: [],
          groups: [],
          conductedTrainings: [],
        } as Coach;

        await this.unitOfWork.coachRepository.save(coachToCreate);
      } else {
        const athleteToCreate: Athlete = {
          user: createdUser,
          scheduleItems: [],
          trainingPackages: [],
          groups: [],
          attendantTrainings: [],
        } as Athlete;

        await this.unitOfWork.athleteRepository.save(athleteToCreate);
      }

      return await this.findById(createdUser.id);
    };

    return await this.unitOfWork.doWork(work);
  }

  public async uploadAvatar(userId: string, file: Express.Multer.File): Promise<string> {
    const work = async () => {
      const user = await this.unitOfWork.userRepository.findById(userId);

      file.originalname = `avatar-user-${userId}`;
      file.filename = `avatar-user-${userId}`;
      user.imageUrl = await this.googleDriveService.uploadImage(file);
      await this.unitOfWork.userRepository.save(user);

      return user.imageUrl;
    }

    return await this.unitOfWork.doWork(work);
  }
}