import { Controller, DefaultValuePipe, Get, ParseBoolPipe, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { GroupService } from '../services/group.service';
import { Group } from '../entities/group.entity';
import { AuthGuard } from '../auth/auth.guard';
import { GroupAttendanceJournalDto } from '../dtos/activity-tracker/group-attendance-journal.dto';

@ApiTags('groups')
@Controller('api/groups')
@UseGuards(AuthGuard)
export class GroupsController {
  constructor(private readonly groupService: GroupService) { }

  @Get()
  public async getGroups(
    @Query('detailed', new DefaultValuePipe(false), ParseBoolPipe) detailed?: boolean
  ): Promise<Group[]> {
    return await this.groupService.findAll(detailed);
  }

  @Get('coach/')
  public async getCoachGroupsById(
    @Query('id') id: string,
  ): Promise<Group[]> {
    return await this.groupService.findCoachGroupsByCoachId(id);
  }

  @Get('attendance-journal/')
  public async getGroupAttendanceJournal(
    @Query('groupId') groupId: string,
    @Query('month') month: number,
    @Query('year') year: number,
  ): Promise<GroupAttendanceJournalDto> {
    return await this.groupService.getGroupAttendanceJournal(groupId, month, year);
  }
}
