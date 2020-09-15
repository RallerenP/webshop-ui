export const ENDPOINT = {
    PRODUCT_LIST: () => "http://localhost:8080/products/",
    IMAGE: (code) => `http://localhost:8080/products/${code}/image.jpg`
}