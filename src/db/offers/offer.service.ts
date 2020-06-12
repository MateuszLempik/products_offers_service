import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IOffer from './interfaces/IOffer';

@Injectable()
export class OfferService {
    constructor(@InjectModel('Offer') private readonly offerModel: Model<IOffer>) {}

    async create(offer: IOffer): Promise<IOffer> {
        const createdOffer = new this.offerModel(offer);
        return await createdOffer.save();
    }
    async read(id: string): Promise<IOffer> {
        return await this.offerModel.findById(id);
    }

    async update(id: string, offer: IOffer): Promise<IOffer> {
        return await this.offerModel.findByIdAndUpdate({_id: id}, offer)
    }

    async delete(id: string): Promise<IOffer> {
        return await this.offerModel.findOneAndDelete({_id: id})
    }

    async findAll(): Promise<IOffer[]> {
        console.log("In offer service")
        const findParams: any = {};
        console.log(findParams)
        return await this.offerModel.find(findParams).exec();
    }
}
