import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { FitProduct } from './fit-product.entity';

@Entity()
export class FitOrder extends BaseEntity {
  @Column({ name: 'comment', type: 'varchar', length: 500, nullable: true })
  public comment?: string;

  @ManyToOne(() => User, (user) => user.fitOrders)
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @ManyToMany(() => FitProduct, (fitProduct) => fitProduct.orders)
  public fitProducts: FitProduct[];
}
