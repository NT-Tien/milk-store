import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BrandEntity } from "../../../entities/brand.entity";
import { BrandServiceInterface } from "./interfaces/brand.interface";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { CreateBrandDto } from "./dto/create-brand.dto";

@Injectable()
export class BrandService implements BrandServiceInterface {

    constructor(
        @InjectRepository(BrandEntity) private readonly BrandRepository: Repository<BrandEntity>,
    ) { }

    createBrand(data: CreateBrandDto): Promise<any> {
        return this.BrandRepository.save(data);
    }
    updateBrand(id: string, data: UpdateBrandDto): Promise<any> {
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