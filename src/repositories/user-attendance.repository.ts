import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { UserAttendance } from '../entities/user-attendance.entity';

@CustomRepository(UserAttendance)
export class UserAttendanceRepository extends BaseRepository<UserAttendance> {
}
