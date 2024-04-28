import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FitOrderService } from '../services/fit-order.service';
import { FitOrder } from '../entities/fit-order.entity';
import { FitOrderUpsertDto } from '../dtos/fit-order/fit-order-upsert.dto';

@ApiTags('fit-orders')
@Controller('api/fit-orders')
export class FitOrdersController {
  constructor(private readonly fitOrderService: FitOrderService) { }

  @Get()
  public async findAll(): Promise<FitOrder[]> {
    return await this.fitOrderService.findAll();
  }

  @Get(':id')
  public async findByUserId(
    @Param('id') userId: string,
  ): Promise<FitOrder[]> {
    return await this.fitOrderService.findByUserId(userId);
  }

  @Post()
  public async create(
    @Body() fitOrderUpsertDto: FitOrderUpsertDto,
  ): Promise<FitOrder> {
    return await this.fitOrderService.create(fitOrderUpsertDto);
  }

  @Put(':id')
  public async updateById(
    @Param('id') id: string,
    @Body() fitOrderUpsertDto: FitOrderUpsertDto,
  ): Promise<FitOrder> {
    return await this.fitOrderService.updateById(id, fitOrderUpsertDto);
  }

  @Delete(':id')
  public async deleteById(
    @Param('id') id: string,
  ): Promise<void> {
    return await this.fitOrderService.deleteById(id);
  }
}
