import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { Group } from '../entities/group.entity';
import { GroupAttendanceJournalDto } from '../dtos/activity-tracker/group-attendance-journal.dto';
import { AthleteAttendanceDto } from '../dtos/attandance/athlete-attendance.dto';

@Injectable()
export class GroupService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }

  public async findAll(detailed: boolean): Promise<Group[]> {
    return await this.unitOfWork.groupRepository.find({
      relations: { coach: true, athletes: { athlete: detailed }},
    });
  }

  public async findCoachGroupsByCoachId(id: string): Promise<Group[]> {
    return await this.unitOfWork.groupRepository.find({
      where: { coach: { user: { id }}},
      relations: {
        athletes: { athlete: true },
      },
    });
  }

  public async getGroupAttendanceJournal(
    groupId: string, month: number | string, year: number | string,
  ): Promise<GroupAttendanceJournalDto> {
    const startDate = `${year}-${month.toString().padStart(2, '0')}-01`;
    const endDate = `${year}-${(Number(month) + 1).toString().padStart(2, '0')}-01`;

    const trainingDates = await this.unitOfWork.scheduleItemRepository
      .createQueryBuilder("scheduleItem")
      .where("scheduleItem.group.id = :groupId", { groupId })
      .andWhere("CAST(scheduleItem.start AS DATE) >= :startDate", { startDate })
      .andWhere("CAST(scheduleItem.start AS DATE) < :endDate", { endDate })
      .getMany();

    const athletesAttendances: AthleteAttendanceDto[] = [];
    const attendanceCatalog = { };
    const athletes = await this.unitOfWork.athleteRepository.find({
      where: { athleteGroups: { group: { id: groupId }}},
      relations: { user: true, attendantTrainings: true }
    });
    console.log(athletes)

    trainingDates.forEach((trainingDate) => {
      attendanceCatalog[trainingDate.start] = [];
    });

    const attendanceDates = Object.keys(attendanceCatalog);

    athletes.forEach((athlete) => {
      const attendantDates = athlete.attendantTrainings.map((training) => training.startAt);
      const athleteAttendances: AthleteAttendanceDto = {
        athleteId: athlete.id,
        fullName: `${athlete.user.surname} ${athlete.user.name.charAt(0)}.${athlete.user.patronymic ? ' ' + athlete.user.patronymic.charAt(0) + '.' : ''}`,
      };

      attendanceDates.forEach((attendanceDate) =>
        athleteAttendances[attendanceDate] = attendantDates.includes(attendanceDate),
      );
      athletesAttendances.push(athleteAttendances);
    });

    return {
      groupId,
      athletesAttendances,
      trainingDates: attendanceDates,
    };
  }
}