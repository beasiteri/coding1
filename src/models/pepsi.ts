import { IProduct } from '../interfaces/product.interface';
import { IModel } from '../interfaces/model.interface';

export class PepsiModel implements IModel {
    getAll(): IProduct[] {
        return [
            { id: 1, name: 'pepsi', is_active: true },
            { id: 2, name: 'pepsi max', is_active: false },
        ]
    }
}