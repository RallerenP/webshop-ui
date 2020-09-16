export const ENDPOINT = {
    PRODUCT_LIST: () => "http://localhost:8080/products/",
    PRODUCT: (id) => `http://localhost:8080/products/${id}`,
    IMAGE: (code) => `http://localhost:8080/products/${code}/image.jpg`,
    DESC: (code) => `http://localhost:8080/products/${code}/description.md`,
    CART: () => "http://localhost:8080/products/cart"
}