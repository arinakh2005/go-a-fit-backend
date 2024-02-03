import { Controller } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('groups')
@Controller('api/groups')
export class GroupsController {}
