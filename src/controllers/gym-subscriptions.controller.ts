import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('gym-subscriptions')
@Controller('api/gym-subscriptions')
export class GymSubscriptionsController { }
