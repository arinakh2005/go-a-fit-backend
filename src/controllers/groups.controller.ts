import { Controller, Get } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { GroupService } from '../services/group.service';
import { Group } from '../entities/group.entity';

@ApiTags('groups')
@Controller('api/groups')
export class GroupsController {
  constructor(private readonly groupService: GroupService) { }

  @Get()
  public async getGroups(): Promise<Group[]> {
    return await this.groupService.findAll();
  }
}
