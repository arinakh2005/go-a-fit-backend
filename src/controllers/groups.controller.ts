import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { GroupService } from '../services/group.service';
import { Group } from '../entities/group.entity';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('groups')
@Controller('api/groups')
@UseGuards(AuthGuard)
export class GroupsController {
  constructor(private readonly groupService: GroupService) { }

  @Get()
  public async getGroups(): Promise<Group[]> {
    return await this.groupService.findAll();
  }

  @Get('coach/')
  public async getCoachGroupsById(
    @Query('id') id: string,
  ): Promise<Group[]> {
    return await this.groupService.findCoachGroupsById(id);
  }
}
