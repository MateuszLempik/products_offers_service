import { Module } from '@nestjs/common';
import { ProductModule } from './db/products/product.module';
import { OfferModule } from './db/offers/offer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/products'),
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost:27017/offers'),
    OfferModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
})
export class AppModule {}