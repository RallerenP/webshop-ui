import type Product from "../models/product";
import { ENDPOINT } from "../api/endpoints";
import type { IProductService } from "./product.service.interface";

export default class ProductService implements IProductService
{
    private _products: Product[] = null;

    async products(): Promise<Product[]>
    {
        if (!this._products)
        {
            const api_prod = await fetch(ENDPOINT.PRODUCT_LIST(),
                {
                    method: 'get',
                });

            // TODO: This assumes no errors. Fix.
            this._products = await api_prod.json();
        }
        return this._products;
    }
}