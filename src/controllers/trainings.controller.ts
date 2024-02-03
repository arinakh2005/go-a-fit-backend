import { Controller } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('trainings')
@Controller('api/trainings')
export class TrainingsController {}
