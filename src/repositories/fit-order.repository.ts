import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { FitOrder } from '../entities/fit-order.entity';

@CustomRepository(FitOrder)
export class FitOrderRepository extends BaseRepository<FitOrder> {
}
