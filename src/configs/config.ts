import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'admin',
  username: 'postgres',
  entities: [`${__dirname}/**/*.entity.{ts,js}`],
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
  migrationsRun: true,
  database: 'go-a-fit',
  synchronize: true,
  logging: true,
} as TypeOrmModuleOptions;

export default {
    db: typeOrmOptions,
};