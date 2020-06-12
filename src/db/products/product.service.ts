import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IProduct from '../products/interfaces/IProduct';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<IProduct>) {}

    async create(product: IProduct): Promise<IProduct> {
        const createdProduct = new this.productModel(product);
        return await createdProduct.save();
    }
    async read(id: string): Promise<IProduct> {
        return await this.productModel.findById(id);
    }

    async update(id: string, product: IProduct): Promise<IProduct> {
        return await this.productModel.findOneAndUpdate({_id: id}, product)
    }

    async delete(id: string): Promise<IProduct> {
        return await this.productModel.findOneAndDelete({_id: id})
    }

    async findAll(type?: string): Promise<IProduct[]> {
        console.log("In products service")
        const findParams: any = {};
        if (type) {
            findParams.type = type;
        }
        console.log(findParams)
        return await this.productModel.find(findParams).exec();
    }
}
