import { DataSource } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { AthleteRepository } from '../repositories/athlete.repository';
import { CoachRepository } from '../repositories/coach.repository';
import { FitOrderRepository } from '../repositories/fit-order.repository';
import { FitProductRepository } from '../repositories/fit-product.repository';
import { GroupRepository } from '../repositories/group.repository';
import { NotificationRepository } from '../repositories/notification.repository';
import { TrainingRepository } from '../repositories/training.repository';
import { TrainingPackageRepository } from '../repositories/training-package.repository';
import { ScheduleRepository } from '../repositories/schedule.repository';

@Injectable()
export class UnitOfWorkService {
    constructor(
        private readonly dataSource: DataSource,
        public readonly athleteRepository: AthleteRepository,
        public readonly coachRepository: CoachRepository,
        public readonly fitOrderRepository: FitOrderRepository,
        public readonly fitProductRepository: FitProductRepository,
        public readonly groupRepository: GroupRepository,
        public readonly scheduleRepository: ScheduleRepository,
        public readonly notificationRepository: NotificationRepository,
        public readonly trainingRepository: TrainingRepository,
        public readonly trainingPackageRepository: TrainingPackageRepository,
    ) {}

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
