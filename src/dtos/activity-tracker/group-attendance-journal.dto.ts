import { AthleteAttendanceDto } from '../attandance/athlete-attendance.dto';

export class GroupAttendanceJournalDto {
  groupId: string;
  trainingDates: string[];
  athletesAttendances: AthleteAttendanceDto[];
}