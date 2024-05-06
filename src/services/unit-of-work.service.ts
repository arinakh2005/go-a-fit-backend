import { DataSource } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { AthleteRepository } from '../repositories/athlete.repository';
import { CoachRepository } from '../repositories/coach.repository';
import { FitOrderRepository } from '../repositories/fit-order.repository';
import { FitProductRepository } from '../repositories/fit-product.repository';
import { GroupRepository } from '../repositories/group.repository';
import { NotificationRepository } from '../repositories/notification.repository';
import { UserAttendanceRepository } from '../repositories/user-attendance.repository';
import { TrainingPackageRepository } from '../repositories/training-package.repository';
import { ScheduleItemRepository } from '../repositories/schedule-item.repository';
import { UserRepository } from '../repositories/user.repository';
import { AthletesGroupRepository } from '../repositories/athletes-group.repository';
import { GymSubscriptionRepository } from '../repositories/gym-subscription.repository';

@Injectable()
export class UnitOfWorkService {
    constructor(
        private readonly dataSource: DataSource,
        public readonly userRepository: UserRepository,
        public readonly athletesGroupRepository: AthletesGroupRepository,
        public readonly athleteRepository: AthleteRepository,
        public readonly coachRepository: CoachRepository,
        public readonly fitOrderRepository: FitOrderRepository,
        public readonly fitProductRepository: FitProductRepository,
        public readonly groupRepository: GroupRepository,
        public readonly scheduleItemRepository: ScheduleItemRepository,
        public readonly notificationRepository: NotificationRepository,
        public readonly userAttendanceRepository: UserAttendanceRepository,
        public readonly gymSubscriptionRepository: GymSubscriptionRepository,
        public readonly trainingPackageRepository: TrainingPackageRepository,
    ) { }

    public async doWork<T>(work: () => T): Promise<T> {
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const result = await work();
            await queryRunner.commitTransaction();

            return result;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            Logger.error(error);
            throw error;
        } finally {
            await queryRunner.release();
        }
    }
}
