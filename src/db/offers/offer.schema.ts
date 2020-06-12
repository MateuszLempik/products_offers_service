import * as mongoose from 'mongoose';
import IOffer from './interfaces/IOffer';

export const OfferSchema = new mongoose.Schema<IOffer>({
  title: String,
  name: String,
  email: String,
  description: Object,
  description2: Object,
  finalPrice: String,
  materialsPrice: Number,
  work: Number,
  date: String,
  chimneyConnection: Object,
  stoneElements: Object,
  insulation: Object,
  grilles: Object,
  glues: Object,
  others: Object,
  firePlace: Object,
  additional: Object   
})