import { Controller, Get, Param, Post, Put, Delete, Body, Res } from '@nestjs/common';
import { OfferService } from './offer.service';
import IOffer from './interfaces/IOffer';

@Controller('offers')
export class OfferController {
    constructor(private readonly offerService: OfferService) {}

    @Get(':id')
    get(@Param('id') id: string) {
        return this.offerService.read(id);
    }

    @Post()
    add(@Body() offer: IOffer) {
        return this.offerService.create(offer);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() offer: IOffer) {
        return this.offerService.update(id, offer);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.offerService.delete(id);
    }

    @Get()
    getAll() {
        return this.offerService.findAll();
    }
}
