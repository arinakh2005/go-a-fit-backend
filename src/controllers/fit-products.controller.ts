import { Controller } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('fit-products')
@Controller('api/fit-products')
export class FitProductsController {}
