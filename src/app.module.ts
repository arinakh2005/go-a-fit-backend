import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FitOrdersController } from './controllers/fit-orders.controller';
import { FitProductsController } from './controllers/fit-products.controller';
import { GroupsController } from './controllers/groups.controller';
import { NotificationsController } from './controllers/notifications.controller';
import { ScheduleItemsController } from './controllers/schedule-items.controller';
import { TrainingPackagesController } from './controllers/training-packages.controller';
import { TrainingsController } from './controllers/trainings.controller';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import config, { GOOGLE_API_FOLDER_ID } from './configs/config';
import { TypeOrmExModule } from './typeorm-ex/typeorm-ex.module';
import { AthleteRepository } from './repositories/athlete.repository';
import { CoachRepository } from './repositories/coach.repository';
import { FitOrderRepository } from './repositories/fit-order.repository';
import { FitProductRepository } from './repositories/fit-product.repository';
import { GroupRepository } from './repositories/group.repository';
import { NotificationRepository } from './repositories/notification.repository';
import { ScheduleItemRepository } from './repositories/schedule-item.repository';
import { TrainingRepository } from './repositories/training.repository';
import { TrainingPackageRepository } from './repositories/training-package.repository';
import { AthleteService } from './services/athlete.service';
import { CoachService } from './services/coach.service';
import { FitOrderService } from './services/fit-order.service';
import { FitProductService } from './services/fit-product.service';
import { GroupService } from './services/group.service';
import { NotificationService } from './services/notification.service';
import { ScheduleItemService } from './services/schedule-item.service';
import { TrainingService } from './services/training.service';
import { TrainingPackageService } from './services/training-package.service';
import { UnitOfWorkService } from './services/unit-of-work.service';
import { UserRepository } from './repositories/user.repository';
import { CoachesController } from './controllers/coaches.controller';
import { AthletesController } from './controllers/athletes.controller';
import { UserService } from './services/user.service';
import { JwtModule } from '@nestjs/jwt';
import { GoogleDriveModule } from 'nestjs-googledrive-upload';
import { AuthController } from './auth/auth.controller';
import { AthletesGroupRepository } from './repositories/athletes-group.repository';
import { GymSubscriptionService } from './services/gym-subscription.service';
import { GymSubscriptionRepository } from './repositories/gym-subscription.repository';
import { GymSubscriptionsController } from './controllers/gym-subscriptions.controller';

const controllers = [
  AppController,
  AuthController,
  CoachesController,
  AthletesController,
  FitOrdersController,
  FitProductsController,
  GroupsController,
  NotificationsController,
  ScheduleItemsController,
  TrainingPackagesController,
  TrainingsController,
  UsersController,
  GymSubscriptionsController,
];

const services = [
  AppService,
  UnitOfWorkService,
  AthleteService,
  CoachService,
  UserService,
  FitOrderService,
  FitProductService,
  GroupService,
  NotificationService,
  ScheduleItemService,
  TrainingService,
  TrainingPackageService,
  GymSubscriptionService,
];

const repositories = [
  UserRepository,
  AthletesGroupRepository,
  AthleteRepository,
  CoachRepository,
  FitOrderRepository,
  FitProductRepository,
  GroupRepository,
  NotificationRepository,
  ScheduleItemRepository,
  TrainingRepository,
  TrainingPackageRepository,
  GymSubscriptionRepository,
];

@Module({
  imports: [
    GoogleDriveModule.register(
      config.google,
      GOOGLE_API_FOLDER_ID,
    ),
    TypeOrmModule.forRoot(config.db),
    TypeOrmExModule.forCustomRepository(repositories),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [...controllers],
  providers: [...services],
})
export class AppModule { }
