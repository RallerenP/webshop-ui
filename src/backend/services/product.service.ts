import type Product from "../models/product";
import { ENDPOINT } from "../api/endpoints";
import type { IProductService } from "./product.service.interface";
import type CartItem from "../models/cartitem";
import { writable as createWritable, Writable } from "svelte/store";
import Cart from "../models/cart";

export default class ProductService implements IProductService
{
    private static instance: ProductService = new ProductService();

    public static getInstance(): ProductService { return this.instance }

    private constructor() { }

    private _products: Product[] = null;
    private _cart: Cart = new Cart();

    private _cartStore: Writable<Cart> = createWritable(this._cart);

    async products(): Promise<Product[]>
    {
        if (!this._products)
        {
            const api_call = await fetch(ENDPOINT.PRODUCT_LIST(),
                {
                    method: 'get',
                });

            // TODO: This assumes no errors. Fix.
            this._products = await api_call.json();
        }
        return this._products;
    }

    async product(id: number): Promise<Product>
    {
        const product_api_call = await fetch(ENDPOINT.PRODUCT(id))

        //TODO: This assumes no errors.
        const product: Product = await product_api_call.json();

        const desc_api_call = await fetch(ENDPOINT.DESC(product.code), {
            headers: {
                'Origin': "localhost:5000",
                'Access-Control-Request-Method': "GET"
            }
        });

        product.desc = await desc_api_call.text();

        return product;
    }

    async updateCart(): Promise<void>
    {
        const api_call = await fetch(ENDPOINT.CART(), {
            credentials: 'include'
        })

        this._cart.items = await api_call.json();
        this._cartStore.set(this._cart); // Propagate change to subscribers
    }

    async addToCart(id: number): Promise<void>
    {
        let data: URLSearchParams = new URLSearchParams();
        data.append('id', id.toString());
        const api_call = await fetch(ENDPOINT.CART(),{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: data,
            credentials: 'include'
        })

        await this.updateCart();
    }

    getCartStore(): Writable<Cart> {
        return this._cartStore;
    }
}