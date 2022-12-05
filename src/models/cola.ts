import { IProduct } from "../interfaces/product.interface";
import { IModel } from '../interfaces/model.interface';

export class ColaModel implements IModel {
    getAll(): IProduct[] {
        return [
            { id: 1, name: 'cola', is_active: false },
            { id: 2, name: 'cola zero', is_active: true },
        ]
    }
}