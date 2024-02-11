import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { NotificationType } from '../enums/notification-type.enum';
import { User } from './user.entity';

@Entity({ name: 'notifications' })
export class Notification extends BaseEntity {
  @Column({ name: 'message', type: 'varchar', length: 500 })
  public message: string;

  @Column({ name: 'type', type: 'enum', enum: NotificationType })
  public type: NotificationType;

  @ManyToOne(() => User, (user) => user.notifications)
  @JoinColumn({ name: 'recipient_id' })
  public recipient: User;
}
