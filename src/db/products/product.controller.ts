import { Controller, Get, Param, Post, Put, Delete, Body, Next, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import IProduct from '../products/interfaces/IProduct';
import { ProductType } from '../products/interfaces/ProductType';
import { Response } from 'express';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @Get(':type')
    async getByType(@Param('type') type: string, @Next() next: Function, @Res() response: Response) {
        console.log("In controller")
        if (!Object.values(ProductType).includes(type)) {
            return next();
        }
        response.send(await this.productService.findAll(type));
    }

    @Get(':id')
    get(@Param('id') id: string) {
        return this.productService.read(id);
    }

    @Post()
    add(@Body() product: IProduct) {
        return this.productService.create(product);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() product: IProduct) {
        return this.productService.update(id, product);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.productService.delete(id);
    }

    @Get()
    getAll() {
        return this.productService.findAll();
    }
}
