import { Controller } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('fit-orders')
@Controller('api/fit-orders')
export class FitOrdersController {}
