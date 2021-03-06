import { Document } from 'mongoose';
export declare class Address extends Document {
    user: string;
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
}
