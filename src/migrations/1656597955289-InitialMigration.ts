import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1656597955289 implements MigrationInterface {
    name = 'InitialMigration1656597955289';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(`CREATE TYPE "public"."system_role_enum" AS ENUM('Атлет', 'Тренер', 'Адміністратор')`);
        await queryRunner.query(`CREATE TYPE "public"."fit_product_availability_enum" AS ENUM('В наявності', 'Товар відсутній', 'Незабаром з''явиться')`);
        await queryRunner.query(`CREATE TYPE "public"."fit_product_category_enum" AS ENUM('Аксесуари', 'Одяг', 'Інше')`);
        await queryRunner.query(`CREATE TYPE "public"."fit_order_status_enum" AS ENUM('Прийнято', 'В очікуванні', 'Оброблено', 'Виконано', 'Скасовано', 'Відхилено')`);
        await queryRunner.query(`CREATE TYPE "public"."notification_type_enum" AS ENUM('TrainingPackageExpiration', 'AdditionalTrainingApproval', 'AdditionalTrainingRejection', 'TrainingCancellation', 'FitCoinReceiving', 'ProductBuying')`);
        await queryRunner.query(`CREATE TYPE "public"."weekday_enum" AS ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')`);
        await queryRunner.query(`CREATE TYPE "public"."occasion_type" AS ENUM('Групове заняття', 'Індивідуальне заняття', 'Вихідний', 'Змагання', 'Інше')`);
        await queryRunner.query(`CREATE TYPE "public"."occasion_status" AS ENUM('Заплановано', 'Завершено', 'Відмінено')`);
        await queryRunner.query(`CREATE TYPE "public"."activity_type" AS ENUM('Фітнес', 'Стретчинг', 'Акробатика', 'Аеробіка', 'Гімнастика', 'Пілатес', 'Інша активність')`);
        await queryRunner.query(`
            CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                  "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                  "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                  "deleted_at" TIMESTAMP, 
                                  "name" character varying(50) NOT NULL,
                                  "surname" character varying(50) NOT NULL,
                                  "patronymic" character varying(50),
                                  "date_of_birth" DATE NOT NULL, 
                                  "email" character varying(100) NOT NULL, 
                                  "phone" character varying(13) DEFAULT NULL, 
                                  "username" character varying(50) NOT NULL,
                                  "password" character varying(60) NOT NULL,
                                  "image_url" character varying,
                                  "system_role" "public"."system_role_enum" NOT NULL DEFAULT 'Атлет',
                                  "fit_cent_amount" integer DEFAULT 0,
                                  CONSTRAINT "PK_USER_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "athletes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                     "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                     "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                     "deleted_at" TIMESTAMP, 
                                     "user_id" uuid,
                                     CONSTRAINT "PK_ATHLETE_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "coaches" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                    "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                    "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                    "deleted_at" TIMESTAMP, 
                                    "activities" character varying(200) NOT NULL,
                                    "education" character varying(500),
                                    "rewards" character varying(500),
                                    "motto" character varying(200),
                                    "user_id" uuid,
                                    CONSTRAINT "PK_COACHES_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "fit-orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                       "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                       "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                       "deleted_at" TIMESTAMP, 
                                       "status" "public"."fit_order_status_enum" NOT NULL DEFAULT 'В очікуванні',
                                       "comment" character varying(500),
                                       "user_id" uuid,
                                       "order_products" json,
                                       CONSTRAINT "PK_FIT_ORDERS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "fit-products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                        "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                        "deleted_at" TIMESTAMP, 
                                        "title" character varying(100) NOT NULL,
                                        "description" character varying(500) NOT NULL,
                                        "category" "public"."fit_product_category_enum" NOT NULL,
                                        "image_url" character varying,
                                        "availability" "public"."fit_product_availability_enum" NOT NULL DEFAULT 'В наявності',
                                        "quantity" integer DEFAULT 0,
                                        "rating" real DEFAULT 0,
                                        "cost" integer DEFAULT 0,
                                        CONSTRAINT "PK_FIT_PRODUCTS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "groups" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                   "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                   "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                   "deleted_at" TIMESTAMP, 
                                   "title" character varying(50) NOT NULL,
                                   "description" character varying(100) DEFAULT '',
                                   "color" character varying(15) DEFAULT '',
                                   "coach_id" uuid,
                                   CONSTRAINT "PK_GROUPS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "athletes-groups" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                            "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                            "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                            "deleted_at" TIMESTAMP, 
                                            "athlete_id" uuid,
                                            "group_id" uuid,
                                            CONSTRAINT "PK_ATHLETES-GROUPS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "notifications" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                          "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                          "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                          "deleted_at" TIMESTAMP, 
                                          "message" character varying(500) NOT NULL,
                                          "type" "public"."notification_type_enum" NOT NULL,
                                          "recipient_id" uuid,
                                          CONSTRAINT "PK_NOTIFICATIONS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "schedule-items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                          "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                          "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                          "deleted_at" TIMESTAMP, 
                                          "start" character varying(20) NOT NULL,
                                          "end" character varying(20) NOT NULL,
                                          "title" character varying(100),
                                          "occasion_type" "public"."occasion_type" NOT NULL,
                                          "occasion_status" "public"."occasion_status" NOT NULL DEFAULT 'Заплановано',
                                          "all_day" BOOLEAN DEFAULT FALSE,
                                          "group_id" uuid,
                                          "coach_id" uuid,
                                          "athlete_id" uuid,
                                          CONSTRAINT "PK_SCHEDULE-ITEMS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "users-attendances" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                             "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                             "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                             "deleted_at" TIMESTAMP, 
                                             "start_at" character varying(20) NOT NULL,
                                             "end_at" character varying(20) NOT NULL,
                                             "visited" BOOLEAN DEFAULT FALSE,
                                             "working_off_allowed" BOOLEAN DEFAULT FALSE,
                                             "group_id" uuid DEFAULT NULL,
                                             "conducted_coach_id" uuid DEFAULT NULL,
                                             "athlete_id" uuid,
                                             CONSTRAINT "PK_USER-ATTENDANCES_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "gym-subscriptions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                              "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                              "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                              "deleted_at" TIMESTAMP, 
                                              "title" character varying(50),
                                              "description" character varying(200),
                                              "activity_type" "public"."activity_type" NOT NULL,
                                              "available_trainings" integer DEFAULT 8,
                                              CONSTRAINT "PK_GYM_SUBSCRIPTIONS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "training-packages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                              "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                              "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                              "deleted_at" TIMESTAMP, 
                                              "beginning_date" DATE NOT NULL,
                                              "expiration_date" DATE NOT NULL,
                                              "trainings_amount" integer DEFAULT 1,
                                              "used_trainings_amount" integer DEFAULT 0,
                                              "missed_trainings_amount" integer DEFAULT 0,
                                              "athlete_id" uuid,
                                              "gym_subscription_id" uuid,
                                              CONSTRAINT "PK_TRAINING_PACKAGES_01" PRIMARY KEY ("id"))`);

        await queryRunner.query(`ALTER TABLE "athletes" ADD CONSTRAINT "FK_ATHLETES-USERS_01" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "coaches" ADD CONSTRAINT "FK_COACHES-USERS_01" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fit-orders" ADD CONSTRAINT "FK_FIT_ORDERS-USERS_01" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "groups" ADD CONSTRAINT "FK_GROUPS-COACHES_01" FOREIGN KEY ("coach_id") REFERENCES "coaches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "athletes-groups" ADD CONSTRAINT "PK_ATHLETES-GROUPS_SOLVING_01" FOREIGN KEY ("athlete_id") REFERENCES "athletes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "athletes-groups" ADD CONSTRAINT "PK_GROUPS-ATHLETES_SOLVING_01" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notifications" ADD CONSTRAINT "FK_NOTIFICATIONS-USERS_01" FOREIGN KEY ("recipient_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule-items" ADD CONSTRAINT "FK_SCHEDULE-ITEMS-GROUPS_01" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule-items" ADD CONSTRAINT "FK_SCHEDULE-ITEMS-COACH_01" FOREIGN KEY ("coach_id") REFERENCES "coaches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule-items" ADD CONSTRAINT "FK_SCHEDULE-ITEMS-ATHLETE_01" FOREIGN KEY ("athlete_id") REFERENCES "athletes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users-attendances" ADD CONSTRAINT "FK_USERS-ATTENDANCES-COACHES_01" FOREIGN KEY ("conducted_coach_id") REFERENCES "coaches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users-attendances" ADD CONSTRAINT "FK_USERS-ATTENDANCES-ATHLETES_01" FOREIGN KEY ("athlete_id") REFERENCES "athletes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "training-packages" ADD CONSTRAINT "FK_TRAINING_PACKAGES-ATHLETES_01" FOREIGN KEY ("athlete_id") REFERENCES "athletes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "training-packages" ADD CONSTRAINT "FK_TRAINING_PACKAGES-GYM_SUBSCRIPTIONS_01" FOREIGN KEY ("gym_subscription_id") REFERENCES "gym-subscriptions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "athletes" DROP CONSTRAINT "FK_ATHLETES-USERS_01"`);
        await queryRunner.query(`ALTER TABLE "coaches" DROP CONSTRAINT "FK_COACHES-USERS_01"`);
        await queryRunner.query(`ALTER TABLE "fit-orders" DROP CONSTRAINT "FK_FIT_ORDERS-USERS_01"`);
        await queryRunner.query(`ALTER TABLE "groups" DROP CONSTRAINT "FK_GROUPS-COACHES_01"`);
        await queryRunner.query(`ALTER TABLE "athletes-groups" DROP CONSTRAINT "PK_ATHLETES-GROUPS_SOLVING_01"`);
        await queryRunner.query(`ALTER TABLE "athletes-groups" DROP CONSTRAINT "PK_GROUPS-ATHLETES_SOLVING_01"`);
        await queryRunner.query(`ALTER TABLE "notifications" DROP CONSTRAINT "FK_NOTIFICATIONS-USERS_01"`);
        await queryRunner.query(`ALTER TABLE "schedule-items" DROP CONSTRAINT "FK_SCHEDULE-ITEMS-GROUPS_01"`);
        await queryRunner.query(`ALTER TABLE "schedule-items" DROP CONSTRAINT "FK_SCHEDULE-ITEMS-COACH_01"`);
        await queryRunner.query(`ALTER TABLE "schedule-items" DROP CONSTRAINT "FK_SCHEDULE-ITEMS-ATHLETE_01"`);
        await queryRunner.query(`ALTER TABLE "users-attendances" DROP CONSTRAINT "FK_USERS-ATTENDANCES-COACHES_01"`);
        await queryRunner.query(`ALTER TABLE "users-attendances" DROP CONSTRAINT "FK_USERS-ATTENDANCES-ATHLETES_01"`);
        await queryRunner.query(`ALTER TABLE "training-packages" DROP CONSTRAINT "FK_TRAINING_PACKAGES-ATHLETES_01"`);
        await queryRunner.query(`ALTER TABLE "training-packages" DROP CONSTRAINT "FK_TRAINING_PACKAGES-GYM_SUBSCRIPTIONS_01"`);
        await queryRunner.query(`DROP TYPE "public"."system_role_enum"`);
        await queryRunner.query(`DROP TYPE "public"."fit_product_availability_enum"`);
        await queryRunner.query(`DROP TYPE "public"."fit_order_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."notification_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."weekday_enum"`);
        await queryRunner.query(`DROP TYPE "public"."occasion_type"`);
        await queryRunner.query(`DROP TYPE "public"."occasion_status"`);
        await queryRunner.query(`DROP TYPE "public"."activity_type"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "athletes"`);
        await queryRunner.query(`DROP TABLE "coaches"`);
        await queryRunner.query(`DROP TABLE "fit-orders"`);
        await queryRunner.query(`DROP TABLE "fit-products"`);
        await queryRunner.query(`DROP TABLE "groups"`);
        await queryRunner.query(`DROP TABLE "notifications"`);
        await queryRunner.query(`DROP TABLE "schedule-items"`);
        await queryRunner.query(`DROP TABLE "users-attendances"`);
        await queryRunner.query(`DROP TABLE "training-packages"`);
    }
}
