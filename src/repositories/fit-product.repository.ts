import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { FitProduct } from '../entities/fit-product.entity';

@CustomRepository(FitProduct)
export class FitProductRepository extends BaseRepository<FitProduct> {
}
