import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { FitProductAvailability } from '../enums/fit-product-availability.enum';
import { FitOrder } from './fit-order.entity';

@Entity({ name: 'fit-products' })
export class FitProduct extends BaseEntity {
  @Column({ name: 'label', type: 'varchar', length: 100 })
  public label: string;

  @Column({ name: 'description', type: 'varchar', length: 500 })
  public description: string;

  @Column({ name: 'availability', type: 'enum', enum: FitProductAvailability, default: FitProductAvailability.InStock })
  public availabilityStatus: FitProductAvailability;

  @Column({ name: 'quantity', type: 'int', default: 0 })
  public quantity: number;

  @Column({ name: 'cost', type: 'int', default: 0 })
  public cost: number;

  @ManyToMany(() => FitOrder, (fitOrder) => fitOrder.fitProducts)
  public orders: FitOrder[];
}
