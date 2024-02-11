import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import config from './config';

export const dataSource = new DataSource(config.db as DataSourceOptions);