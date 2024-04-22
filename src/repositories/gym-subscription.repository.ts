import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { GymSubscription } from '../entities/gym-subscription.entity';

@CustomRepository(GymSubscription)
export class GymSubscriptionRepository extends BaseRepository<GymSubscription> {
}
