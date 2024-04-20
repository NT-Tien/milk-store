import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BrandEntity } from "../../../entities/Brand.entity";
import { BrandServiceInterface } from "./interfaces/brand.interface";

@Injectable()
export class BrandService implements BrandServiceInterface {

    constructor(
        @InjectRepository(BrandEntity) private readonly BrandRepository: Repository<BrandEntity>,
    ) { }

    createBrand(data: any): Promise<any> {
        return this.BrandRepository.save(data);
    }
    updateBrand(id: string, data: any): Promise<any> {
        return this.BrandRepository.update(id, data);
    }
    deleteBrand(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    softDeleteBrand(id: string): Promise<any> {
        return this.BrandRepository.update(id, { deletedAt: new Date()});
    }
    unDeleteBrand(id: string): Promise<any> {
        return this.BrandRepository.update(id, { deletedAt: null });
    }
    getBrandById(id: any): Promise<any> {
        return this.BrandRepository.findOne({where: {id}});
    }
    getBrands(): Promise<any> {
        return this.BrandRepository.find();
    }
} 