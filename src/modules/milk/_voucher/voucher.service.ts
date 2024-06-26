import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VoucherEntity } from "../../../entities/voucher.entity";
import { CreateVoucherDto } from "./dto/create-voucher.dto";
import { UpdateVoucherDto } from "./dto/update-voucher.dto";
import { VoucherServiceInterface } from "./interfaces/voucher-milk.interface";
import { VoucherApllyEntity } from "src/entities/voucher-apply.entity";
import { VoucherApplyUserDto } from "./dto/voucher-apply-user.dto";

@Injectable()
export class VoucherService implements VoucherServiceInterface {

    constructor(
        @InjectRepository(VoucherEntity) private readonly voucherRepository: Repository<VoucherEntity>,
        @InjectRepository(VoucherApllyEntity) private readonly voucherApplyRepository: Repository<VoucherApllyEntity>,
    ) { }
    applyVoucherForUser(data: VoucherApplyUserDto): Promise<any> {
        return this.voucherApplyRepository.save({
            voucher: data.voucherId,
            phone: data.phone,
            email: data.email,
            quantity: data.quantity,
        });
    }
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
        return this.voucherRepository.update(id, { deletedAt: new Date() });
    }
    unDeleteVoucher(id: string): Promise<any> {
        return this.voucherRepository.update(id, { deletedAt: null });
    }
    getVoucherById(id: string): Promise<any> {
        return this.voucherRepository.findOne({ where: { id } });
    }
    getVouchers(): Promise<any> {
        return this.voucherRepository.find();
    }
} 