import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ScheduleItemService } from '../services/schedule-item.service';
import { ScheduleItem } from '../entities/schedule-item.entity';
import { ScheduleItemUpsertDto } from '../dtos/schedule-item/schedule-item-upsert.dto';

@ApiTags('schedule-items')
@Controller('api/schedule-items')
export class ScheduleItemsController {
  constructor(private readonly scheduleItemService: ScheduleItemService) { }

  @Get()
  public async findAll(): Promise<ScheduleItem[]> {
    return await this.scheduleItemService.findAll();
  }

  @Post()
  public async create(
    @Body() scheduleItemCreateDto: ScheduleItemUpsertDto,
  ): Promise<ScheduleItem> {
    return await this.scheduleItemService.create(scheduleItemCreateDto);
  }

  @Put(':id')
  public async updateById(
    @Param('id') id: string,
    @Body() scheduleItemUpdateDto: ScheduleItemUpsertDto,
  ): Promise<ScheduleItem> {
    return await this.scheduleItemService.updateById(id, scheduleItemUpdateDto);
  }

  @Delete(':id')
  public async deleteById(
    @Param('id') id: string,
  ): Promise<void> {
    return await this.scheduleItemService.deleteById(id);
  }
}
