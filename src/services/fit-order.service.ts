import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { UnitOfWorkService } from './unit-of-work.service';
import { FitOrder } from '../entities/fit-order.entity';
import { FitOrderUpsertDto } from '../dtos/fit-order/fit-order-upsert.dto';
import { FitOrderStatus } from '../enums/fit-order-status.enum';
import { RetrieveUserDto } from '../dtos/user/retrieve-user.dto';
import { UserService } from './user.service';

@Injectable()
export class FitOrderService extends BaseService {
  constructor(
    protected readonly unitOfWork: UnitOfWorkService,
    private readonly userService: UserService,
  ) {
    super(unitOfWork);
  }

  public async findAll(): Promise<FitOrder[]> {
    return await this.unitOfWork.fitOrderRepository.find();
  }

  public async findByUserId(userId: string): Promise<FitOrder[]> {
    return await this.unitOfWork.fitOrderRepository.find({
      where: { user: { id: userId }},
    });
  }

  public async create(fitOrderUpsertDto: FitOrderUpsertDto): Promise<RetrieveUserDto> {
    const work = async () => {
      const fitOrderToCreate: FitOrder = {
        user: { id: fitOrderUpsertDto.userId },
        status: FitOrderStatus.Accepted,
        fitOrderProducts: fitOrderUpsertDto.fitOrderProducts,
      } as FitOrder;

      await this.unitOfWork.fitOrderRepository.save(fitOrderToCreate);

      return await this.userService.findById(fitOrderToCreate.user.id);
    }

    return await this.unitOfWork.doWork(work);
  }

  public async updateById(id: string, fitOrderUpsertDto: FitOrderUpsertDto): Promise<FitOrder> {
    const work = async () => {
      const fitOrderToUpdate = await this.unitOfWork.fitOrderRepository.findById(id);
      if (!fitOrderToUpdate) return;

      fitOrderToUpdate.fitOrderProducts = fitOrderUpsertDto.fitOrderProducts;
      fitOrderToUpdate.status = fitOrderUpsertDto.status;
      fitOrderToUpdate.comment = fitOrderUpsertDto.comment;

      return await this.unitOfWork.scheduleItemRepository.save(fitOrderToUpdate);
    }

    return await this.unitOfWork.doWork(work);
  }

  public async deleteById(id: string): Promise<void> {
    const work = async () => {
      const fitOrder = await this.unitOfWork.fitOrderRepository.findById(id);
      if (!fitOrder) return;

      await this.unitOfWork.scheduleItemRepository.softRemove(fitOrder);
    };

    return await this.unitOfWork.doWork(work);
  }
}