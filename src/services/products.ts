import { IProduct } from "../interfaces/product.interface";
import { IModel } from '../interfaces/model.interface';

export class ProductsService {
    private model: IModel;

    constructor(model: IModel) {
        this.model = model;
    };

    getAll(): IProduct[] {
        const products = this.model.getAll();
        return products;
    }

    getActiveProducts(): IProduct[] {
        const products = this.model.getAll();
        const activeProducts = products.filter(p => p.is_active);
        return activeProducts;
    }
}