import { IProduct } from '../interfaces/product.interface';

export interface IModel {
    getAll: () => IProduct[];
}