import { Controller } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('notifications')
@Controller('api/notifications')
export class NotificationsController {}
