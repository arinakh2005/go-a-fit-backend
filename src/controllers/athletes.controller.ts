import { Controller, Get } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { AthleteService } from '../services/athlete.service';
import { Athlete } from '../entities/athlete.entity';

@ApiTags('athletes')
@Controller('api/athletes')
export class AthletesController {
  constructor(private readonly athleteService: AthleteService) { }

  @Get()
  public async getAthletes(): Promise<Athlete[]> {
    return await this.athleteService.findAll();
  }
}
