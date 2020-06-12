import { Module } from '@nestjs/common';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { OfferSchema } from './offer.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Offer', schema: OfferSchema }])],
  controllers: [OfferController],
  providers: [OfferService]
})
export class OfferModule {}
