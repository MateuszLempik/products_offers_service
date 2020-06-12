import * as mongoose from 'mongoose';
import IProduct from '../products/interfaces/IProduct';
import { ProductType } from '../products/interfaces/ProductType';

export const ProductSchema = new mongoose.Schema<IProduct>({
  name: String,
  description: String,
  property: String,
  thickness: Array,
  price: String,
  colour: String,
  type: {type: String, enum: Object.values(ProductType)}
})