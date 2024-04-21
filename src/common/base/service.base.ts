import { Repository } from 'typeorm';
import { isUUID } from 'class-validator';
import { HttpException } from '@nestjs/common';
import { BaseEntity } from './entity.base';

export class BaseService<Entity extends BaseEntity> {

    constructor(
        protected repo: Repository<Entity>,
    ) { }

   async getAll(): Promise<Entity[]> {
        var result = await this.repo.find();
        return result;
    }

    getOne(id: string): Promise<Entity> {
        if(!isUUID(id)) throw new HttpException('Id is incorrect', 400);
        return this.repo.findOne({ where: { id: id as any } });
    }

    create(entity: any): Promise<Entity> {
        return this.repo.save(entity);
    }

    async update(id: string, entity: any): Promise<Entity> {
        if(!isUUID(id)) throw new HttpException('Id is incorrect', 400);
        entity.updatedAt = new Date();
        return this.repo.update(id, entity).then(() => this.getOne(id));

    }

    delete(id: string): Promise<any> {
        if(!isUUID(id)) throw new HttpException('Id is incorrect', 400);
        return this.repo.delete(id);
    }

}