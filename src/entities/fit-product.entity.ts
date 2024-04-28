import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { FitProductAvailability } from '../enums/fit-product-availability.enum';
import { FitOrder } from './fit-order.entity';
import { FitProductCategory } from '../enums/fit-product-category.enum';

@Entity({ name: 'fit-products' })
export class FitProduct extends BaseEntity {
  @Column({ name: 'title', type: 'varchar', length: 100 })
  public title: string;

  @Column({ name: 'description', type: 'varchar', length: 500 })
  public description: string;

  @Column({ name: 'category', type: 'enum', enum: FitProductCategory })
  public category: FitProductCategory;

  @Column({ name: 'image_url', type: 'varchar', nullable: true })
  public imageUrl?: string;

  @Column({ name: 'availability', type: 'enum', enum: FitProductAvailability, default: FitProductAvailability.InStock })
  public availabilityStatus: FitProductAvailability;

  @Column({ name: 'quantity', type: 'int', default: 0 })
  public quantity: number;

  @Column({ name: 'rating', type: 'real', default: 0 })
  public rating: number;

  @Column({ name: 'cost', type: 'int', default: 0 })
  public cost: number;

  @ManyToMany(() => FitOrder, (fitOrder) => fitOrder.fitOrderProducts)
  public orders: FitOrder[];
}
