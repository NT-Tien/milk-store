import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VoucherEntity } from "../../../entities/voucher.entity";
import { CreateVoucherDto } from "./dto/create-voucher.dto";
import { UpdateVoucherDto } from "./dto/update-voucher.dto";
import { VoucherServiceInterface } from "./interfaces/voucher-milk.interface";

@Injectable()
export class VoucherService implements VoucherServiceInterface {

    constructor(
        @InjectRepository(VoucherEntity) private readonly voucherRepository: Repository<VoucherEntity>,
    ) { }

    createVoucher(data: CreateVoucherDto): Promise<any> {
        return this.voucherRepository.save(data);
    }
    updateVoucher(id: string, data: UpdateVoucherDto): Promise<any> {
        return this.voucherRepository.update(id, data);
    }
    increaseVoucherQuantity(id: string, quantity: number): Promise<any> {
        return this.voucherRepository.update(id, { quantity: () => `quantity + ${quantity}` });
    }
    decreaseVoucherQuantity(id: string, quantity: number): Promise<any> {
        return this.voucherRepository.update(id, { quantity: () => `quantity - ${quantity}` });
    }
    deleteVoucher(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    softDeleteVoucher(id: string): Promise<any> {
        return this.voucherRepository.update(id, { deletedAt: new Date()});
    }
    unDeleteVoucher(id: string): Promise<any> {
        return this.voucherRepository.update(id, { deletedAt: null });
    }
    getVoucherById(id: any): Promise<any> {
        return this.voucherRepository.findOne(id);
    }
    getVouchers(): Promise<any> {
        return this.voucherRepository.find();
    }
} 