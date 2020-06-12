import { Document } from "mongoose";

export default interface IOffer extends Document {
    title: string,
    name: string,
    email: string,
    description: object,
    description2: object,
    finalPrice: string,
    materialsPrice: number,
    work: number,
    date: string,
    chimneyConnection: object,
    stoneElements: object,
    insulation: object,
    grilles: object,
    glues: object,
    others: object,
    firePlace: object,
    additional: object

}