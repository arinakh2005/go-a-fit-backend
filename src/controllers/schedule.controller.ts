import { Controller } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('schedule')
@Controller('api/schedule')
export class ScheduleController {}
