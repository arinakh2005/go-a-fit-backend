import { Controller, Get } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { ScheduleItemService } from '../services/schedule-item.service';
import { ScheduleItem } from '../entities/schedule-item.entity';

@ApiTags('schedule-items')
@Controller('api/schedule-items')
export class ScheduleItemsController {
  constructor(private readonly scheduleItemService: ScheduleItemService) { }

  @Get()
  public async findAll(): Promise<ScheduleItem[]> {
    return await this.scheduleItemService.findAll();
  }
}
