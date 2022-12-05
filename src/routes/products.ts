import { ProductsService } from '../services/products';
import { ColaModel } from '../models/cola';
import { PepsiModel } from '../models/pepsi';

module.exports = (app) => {
    const colaModel = new ColaModel();
    const pepsiModel = new PepsiModel();

    app.get('/products/cola', (req, res) => {
        const productsService = new ProductsService(colaModel);
        const allColaProducts = productsService.getAll();
        res.send(allColaProducts);
    });

    app.get('/products/cola/active', (req, res) => {
        const productsService = new ProductsService(colaModel);
        const allActiveColaProducts = productsService.getActiveProducts();
        res.send(allActiveColaProducts);
    });

    app.get('/products/pepsi', (req, res) => {
        const productsService = new ProductsService(pepsiModel);
        const allPepsiProducts = productsService.getAll();
        res.send(allPepsiProducts);
    });

    app.get('/products/pepsi/active', (req, res) => {
        const productsService = new ProductsService(pepsiModel);
        const allActivePepsiProducts = productsService.getActiveProducts();
        res.send(allActivePepsiProducts);
    });
}