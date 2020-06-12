import { Document } from "mongoose";
import { ProductType } from "./ProductType";

export default interface IProduct extends Document {
    name: string,
    description: string,
    property: string,
    thickness: string[],
    price: string,
    colour: string,
    type: ProductType
}