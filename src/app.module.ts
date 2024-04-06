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
import config from './configs/config';
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
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const controllers = [
  AppController,
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
];

const repositories = [
  UserRepository,
  AthleteRepository,
  CoachRepository,
  FitOrderRepository,
  FitProductRepository,
  GroupRepository,
  NotificationRepository,
  ScheduleItemRepository,
  TrainingRepository,
  TrainingPackageRepository,
];

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads')
    }),
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
export class AppModule {}
