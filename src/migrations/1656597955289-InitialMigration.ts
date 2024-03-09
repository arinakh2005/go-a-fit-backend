import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1656597955289 implements MigrationInterface {
    name = 'InitialMigration1656597955289';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(`CREATE TYPE "public"."system_role_enum" AS ENUM('Athlete', 'Coach', 'Admin')`);
        await queryRunner.query(`CREATE TYPE "public"."fit_product_availability_enum" AS ENUM('InStock', 'OutOfStock', 'SoonInStock')`);
        await queryRunner.query(`CREATE TYPE "public"."notification_type_enum" AS ENUM('TrainingPackageExpiration', 'AdditionalTrainingApproval', 'AdditionalTrainingRejection', 'TrainingCancellation', 'FitCoinReceiving', 'ProductBuying')`);
        await queryRunner.query(`CREATE TYPE "public"."training_status_enum" AS ENUM('Planned', 'Completed', 'Cancelled')`);
        await queryRunner.query(`CREATE TYPE "public"."weekday_enum" AS ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')`);
        await queryRunner.query(`CREATE TYPE "public"."occasion_type" AS ENUM('GroupTraining', 'PersonalTraining', 'Holiday', 'Competition', 'Other')`);
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
                                  "username" character varying(50) NOT NULL,
                                  "password" character varying(50) NOT NULL,
                                  "image_url" character varying,
                                  "group_id" uuid,
                                  "system_role" "public"."system_role_enum" NOT NULL DEFAULT 'Athlete',
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
                                    "user_id" uuid,
                                    CONSTRAINT "PK_COACHES_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "fit-orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                       "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                       "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                       "deleted_at" TIMESTAMP, 
                                       "comment" character varying(500),
                                       "user_id" uuid,
                                       CONSTRAINT "PK_FIT_ORDERS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "fit-products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                        "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                        "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                        "deleted_at" TIMESTAMP, 
                                        "label" character varying(100) NOT NULL,
                                        "description" character varying(500) NOT NULL,
                                        "availability" "public"."fit_product_availability_enum" NOT NULL DEFAULT 'InStock',
                                        "quantity" integer DEFAULT 0,
                                        "cost" integer DEFAULT 0,
                                        CONSTRAINT "PK_FIT_PRODUCTS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "groups" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                   "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                   "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                   "deleted_at" TIMESTAMP, 
                                   "name" character varying(100) NOT NULL,
                                   "coach_id" uuid,
                                   CONSTRAINT "PK_GROUPS_01" PRIMARY KEY ("id"))`);
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
                                          "start" DATE NOT NULL,
                                          "end" DATE NOT NULL,
                                          "title" character varying(100),
                                          "occasion_type" "public"."occasion_type" NOT NULL,
                                          "all_day" BOOLEAN DEFAULT FALSE,
                                          "group_id" uuid,
                                          "coach_id" uuid,
                                          "athlete_id" uuid,
                                     CONSTRAINT "PK_SCHEDULE-ITEMS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "trainings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                     "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                     "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                     "deleted_at" TIMESTAMP, 
                                     "start_at" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
                                     "end_at" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
                                     "status" "public"."training_status_enum" NOT NULL DEFAULT 'Planned',
                                     "group_id" uuid,
                                     "conducted_coach_id" uuid,
                                     CONSTRAINT "PK_TRAININGS_01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`
            CREATE TABLE "training-packages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                                              "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                              "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                              "deleted_at" TIMESTAMP, 
                                              "beginning_date" DATE NOT NULL,
                                              "expiration_date" DATE NOT NULL,
                                              "available_trainings" integer DEFAULT 8,
                                              "athlete_id" uuid,
                                              CONSTRAINT "PK_TRAINING_PACKAGES_01" PRIMARY KEY ("id"))`);

        await queryRunner.query(`ALTER TABLE "athletes" ADD CONSTRAINT "FK_ATHLETES-USERS_01" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "coaches" ADD CONSTRAINT "FK_COACHES-USERS_01" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fit-orders" ADD CONSTRAINT "FK_FIT_ORDERS-USERS_01" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "groups" ADD CONSTRAINT "FK_GROUPS-COACHES_01" FOREIGN KEY ("coach_id") REFERENCES "coaches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notifications" ADD CONSTRAINT "FK_NOTIFICATIONS-USERS_01" FOREIGN KEY ("recipient_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule-items" ADD CONSTRAINT "FK_SCHEDULE-ITEMS-GROUPS_01" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule-items" ADD CONSTRAINT "FK_SCHEDULE-ITEMS-COACH_01" FOREIGN KEY ("coach_id") REFERENCES "coaches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule-items" ADD CONSTRAINT "FK_SCHEDULE-ITEMS-ATHLETE_01" FOREIGN KEY ("athlete_id") REFERENCES "athletes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "trainings" ADD CONSTRAINT "FK_TRAININGS-COACHES_01" FOREIGN KEY ("conducted_coach_id") REFERENCES "coaches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "training-packages" ADD CONSTRAINT "FK_TRAINING_PACKAGES-ATHLETES_01" FOREIGN KEY ("athlete_id") REFERENCES "coaches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "athletes" DROP CONSTRAINT "FK_ATHLETES-USERS_01"`);
        await queryRunner.query(`ALTER TABLE "coaches" DROP CONSTRAINT "FK_COACHES-USERS_01"`);
        await queryRunner.query(`ALTER TABLE "fit-orders" DROP CONSTRAINT "FK_FIT_ORDERS-USERS_01"`);
        await queryRunner.query(`ALTER TABLE "groups" DROP CONSTRAINT "FK_GROUPS-COACHES_01"`);
        await queryRunner.query(`ALTER TABLE "notifications" DROP CONSTRAINT "FK_NOTIFICATIONS-USERS_01"`);
        await queryRunner.query(`ALTER TABLE "schedule-items" DROP CONSTRAINT "FK_SCHEDULE-ITEMS-GROUPS_01"`);
        await queryRunner.query(`ALTER TABLE "schedule-items" DROP CONSTRAINT "FK_SCHEDULE-ITEMS-COACH_01"`);
        await queryRunner.query(`ALTER TABLE "schedule-items" DROP CONSTRAINT "FK_SCHEDULE-ITEMS-ATHLETE_01"`);
        await queryRunner.query(`ALTER TABLE "trainings" DROP CONSTRAINT "FK_TRAININGS-COACHES_01"`);
        await queryRunner.query(`ALTER TABLE "training-packages" DROP CONSTRAINT "FK_TRAINING_PACKAGES-ATHLETES_01"`);
        await queryRunner.query(`DROP TYPE "public"."system_role_enum"`);
        await queryRunner.query(`DROP TYPE "public"."fit_product_availability_enum"`);
        await queryRunner.query(`DROP TYPE "public"."notification_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."training_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."weekday_enum"`);
        await queryRunner.query(`DROP TYPE "public"."occasion_type"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "athletes"`);
        await queryRunner.query(`DROP TABLE "coaches"`);
        await queryRunner.query(`DROP TABLE "fit-orders"`);
        await queryRunner.query(`DROP TABLE "fit-products"`);
        await queryRunner.query(`DROP TABLE "groups"`);
        await queryRunner.query(`DROP TABLE "notifications"`);
        await queryRunner.query(`DROP TABLE "schedule-items"`);
        await queryRunner.query(`DROP TABLE "trainings"`);
        await queryRunner.query(`DROP TABLE "training-packages"`);
    }
}
