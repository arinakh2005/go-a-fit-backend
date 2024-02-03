import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { Notification } from '../entities/notification.entity';

@CustomRepository(Notification)
export class NotificationRepository extends BaseRepository<Notification> {
}
