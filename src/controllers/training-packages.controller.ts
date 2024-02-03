import { Controller } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('training-packages')
@Controller('api/training-packages')
export class TrainingPackagesController {}
