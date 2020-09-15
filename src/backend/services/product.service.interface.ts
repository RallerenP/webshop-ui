import type Product from "../models/product";

export interface IProductService {
    products(): Promise<Product[]>;
}