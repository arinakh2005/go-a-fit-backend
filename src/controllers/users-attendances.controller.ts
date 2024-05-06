import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserAttendanceService } from '../services/user-attendance.service';
import { UserAttendance } from '../entities/user-attendance.entity';

@ApiTags('users-attendances')
@Controller('api/users-attendances')
export class UsersAttendancesController {
  constructor(private readonly userAttendanceService: UserAttendanceService) { }

  @Get()
  public async findByAthleteId(
    @Query('athleteId') athleteId: string,
  ): Promise<UserAttendance[]> {
    return await this.userAttendanceService.findByAthleteId(athleteId);
  }
}
