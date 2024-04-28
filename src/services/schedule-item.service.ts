import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { ScheduleItem } from '../entities/schedule-item.entity';
import { ScheduleItemUpsertDto } from '../dtos/schedule-item/schedule-item-upsert.dto';
import { OccasionType } from '../enums/occasion-type';
import { Group } from '../entities/group.entity';
import { Coach } from '../entities/coach.entity';
import { Athlete } from '../entities/athlete.entity';
import { DateService } from './date.service';

@Injectable()
export class ScheduleItemService extends BaseService {
  constructor(protected readonly unitOfWork: UnitOfWorkService) {
    super(unitOfWork);
  }

  public async findAll(): Promise<ScheduleItem[]> {
    return await this.unitOfWork.scheduleItemRepository.find({ relations: { group: true }});
  }

  public async create(scheduleItem: ScheduleItemUpsertDto): Promise<ScheduleItem> {
    const work = async () => {
      const scheduleItemToCreate: ScheduleItem = {
        start: DateService.formatToString(scheduleItem.start),
        end: DateService.formatToString(scheduleItem.end),
        title: scheduleItem.title,
        occasionType: scheduleItem.occasionType,
        isAllDay: scheduleItem.isAllDay,
      } as ScheduleItem;

      if (scheduleItem.occasionType === OccasionType.GroupTraining) {
        scheduleItemToCreate.group = { id: scheduleItem.groupId } as Group;
        scheduleItemToCreate.coach = { id: scheduleItem.coachId } as Coach;
      } else if (scheduleItem.occasionType === OccasionType.PersonalTraining) {
        scheduleItemToCreate.athlete = { id: scheduleItem.athleteId } as Athlete;
        scheduleItemToCreate.coach = { id: scheduleItem.coachId } as Coach;
      }

      return await this.unitOfWork.scheduleItemRepository.save(scheduleItemToCreate);
    };

    return await this.unitOfWork.doWork(work);
  }

  public async updateById(id: string, scheduleItem: ScheduleItemUpsertDto): Promise<ScheduleItem> {
    const work = async () => {
      const scheduleItemToUpdate = await this.unitOfWork.scheduleItemRepository.findById(id);
      if (!scheduleItemToUpdate) return;

      scheduleItemToUpdate.start = DateService.formatToString(scheduleItem.start);
      scheduleItemToUpdate.end = DateService.formatToString(scheduleItem.end);
      scheduleItemToUpdate.title = scheduleItem.title;
      scheduleItemToUpdate.occasionType = scheduleItem.occasionType;
      scheduleItemToUpdate.isAllDay = scheduleItem.isAllDay;

      if (scheduleItem.occasionType === OccasionType.GroupTraining) {
        scheduleItemToUpdate.group = { id: scheduleItem.groupId } as Group;
        scheduleItemToUpdate.coach = { id: scheduleItem.coachId } as Coach;
        scheduleItemToUpdate.athlete = null;
      } else if (scheduleItem.occasionType === OccasionType.PersonalTraining) {
        scheduleItemToUpdate.athlete = { id: scheduleItem.athleteId } as Athlete;
        scheduleItemToUpdate.coach = { id: scheduleItem.coachId } as Coach;
        scheduleItemToUpdate.group = null;
      } else {
        scheduleItemToUpdate.athlete = null;
        scheduleItemToUpdate.group = null;
        scheduleItemToUpdate.coach = null;
      }

      return await this.unitOfWork.scheduleItemRepository.save(scheduleItemToUpdate);
    };

    return await this.unitOfWork.doWork(work);
  }

  public async deleteById(id: string): Promise<void> {
    const work = async () => {
      const scheduleItem = await this.unitOfWork.scheduleItemRepository.findById(id);
      if (!scheduleItem) return;

      await this.unitOfWork.scheduleItemRepository.softRemove(scheduleItem);
    };

    return await this.unitOfWork.doWork(work);
  }
}