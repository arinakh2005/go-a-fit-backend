import { Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { SystemRole } from '../enums/system-role.enum';
import { Notification } from './notification.entity';
import { FitOrder } from './fit-order.entity';

export abstract class User extends BaseEntity {
  @Column({ name: 'name', type: 'varchar', length: 50 })
  public name: string;

  @Column({ name: 'surname', type: 'varchar', length: 50 })
  public surname: string;

  @Column({ name: 'patronymic', type: 'varchar', length: 50, nullable: true })
  public patronymic: string;

  @Column({ name: 'date_of_birth', type: 'date' })
  public dateOfBirth: Date;

  @Column({ name: 'email', type: 'varchar', length: 100 })
  public email: string;

  @Column({ name: 'username', type: 'varchar', length: 50 })
  public username: string;

  @Column({ name: 'password', type: 'varchar', length: 50 })
  public password: string;

  @Column({ name: 'image_url', type: 'varchar', nullable: true })
  public imageUrl?: string;

  @Column({ name: 'system_role', type: 'enum', enum: SystemRole, default: SystemRole.Athlete })
  public systemRole: SystemRole;

  @Column({ name: 'fit_cent_amount', type: 'number', default: 0 })
  public fitCentAmount: number;

  @OneToMany(() => Notification, (notification) => notification.recipient)
  public notifications: Notification[];

  @OneToMany(() => FitOrder, (fitOrder) => fitOrder.user)
  public fitOrders: FitOrder[];
}
