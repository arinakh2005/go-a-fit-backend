import { Controller, Get } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { CoachService } from '../services/coach.service';
import { Coach } from '../entities/coach.entity';

@ApiTags('coaches')
@Controller('api/coaches')
export class CoachesController {
  constructor(private readonly coachService: CoachService) { }

  @Get()
  public async getCoaches(): Promise<Coach[]> {
    return await this.coachService.findAll();
  }
}
