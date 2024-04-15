import { Injectable } from "@nestjs/common";
import { MilkServiceInterface } from "./interfaces/milk-service.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { MilkEntity } from "../../entities/milk.entity";
import { Repository } from "typeorm";
import { CreateMilkDto } from "./dto/create-milk.dto";
import { UpdateMilkDto } from "./dto/update-milk.dto";

@Injectable()
export class MilkService implements MilkServiceInterface {

    constructor(
        @InjectRepository(MilkEntity) private readonly milkRepository: Repository<MilkEntity>,
    ) { }

    createMilk(data: CreateMilkDto): Promise<any> {
        return this.milkRepository.save(data);
    }
    updateMilk(id: string, data: UpdateMilkDto): Promise<any> {
        return this.milkRepository.update(id, data);
    }
    increaseMilkQuantity(id: string, quantity: number): Promise<any> {
        return this.milkRepository.update(id, { quantity: () => `quantity + ${quantity}` });
    }
    decreaseMilkQuantity(id: string, quantity: number): Promise<any> {
        return this.milkRepository.update(id, { quantity: () => `quantity - ${quantity}` });
    }
    deleteMilk(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    softDeleteMilk(id: string): Promise<any> {
        return this.milkRepository.update(id, { deletedAt: new Date()});
    }
    unDeleteMilk(id: string): Promise<any> {
        return this.milkRepository.update(id, { deletedAt: null });
    }
    getMilkById(id: any): Promise<any> {
        return this.milkRepository.findOne(id);
    }
    getMilks(): Promise<any> {
        return this.milkRepository.find();
    }
} 