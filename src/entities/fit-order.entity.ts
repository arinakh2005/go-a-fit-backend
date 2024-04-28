import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { FitOrderStatus } from '../enums/fit-order-status.enum';
import { FitOrderProductDto } from '../dtos/fit-order/fit-order-product.dto';

@Entity({ name: 'fit-orders' })
export class FitOrder extends BaseEntity {
  @Column({ name: 'comment', type: 'varchar', length: 500, nullable: true })
  public comment?: string;

  @Column({ name: 'status', type: 'enum', enum: FitOrderStatus, default: FitOrderStatus.Pending })
  public status: FitOrderStatus;

  @Column({ name: 'order_products', type: 'json', nullable: true })
  public fitOrderProducts: FitOrderProductDto[];

  @ManyToOne(() => User, (user) => user.fitOrders)
  @JoinColumn({ name: 'user_id' })
  public user: User;
}
