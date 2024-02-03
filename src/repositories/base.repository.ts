import { DeepPartial, Repository, SaveOptions } from 'typeorm';

export abstract class BaseRepository<TEntity> extends Repository<TEntity> {
    public findById(id: string): Promise<TEntity> {
        return this.findOne({
            where: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                id: id,
            },
        });
    }

    public save<T extends DeepPartial<TEntity>>(entity: T, options?: SaveOptions): Promise<T & TEntity> {
        return super.save(entity, { transaction: false, ...options });
    }

    public batchSave<T extends DeepPartial<TEntity>>(entity: T[], options?: SaveOptions): Promise<(T & TEntity)[]> {
        return super.save(entity, { transaction: false, ...options });
    }

    public softRemove<T extends DeepPartial<TEntity>>(entity: T, options?: SaveOptions): Promise<T & TEntity> {
        return super.softRemove(entity, { transaction: false, ...options });
    }
}
