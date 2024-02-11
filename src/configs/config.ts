import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'admin',
  username: 'postgres',
  entities: [`${__dirname}/../entities/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
  migrationsRun: true,
  database: 'go-a-fit',
  synchronize: false,
  logging: true,
} as TypeOrmModuleOptions;

export default {
    db: typeOrmOptions,
};