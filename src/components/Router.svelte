<script>
    import router from "page";
    import Home from '../pages/home/home.svelte';
    import Shop from '../pages/shop/Shop.svelte';
    import ProductPage from '../pages/shop/pages/product-page/ProductPage.svelte'
    import ProductService from "../backend/services/product.service";
    import Cart from '../pages/shop/pages/cart/Cart.svelte';
    let page;

    router('/', () => page = Home)
    router('/shop', () => page = Shop)

    let id;
    router('/shop/:id', (ctx, next) => {id = ctx.params.id; next()}, () => page = ProductPage)

    let productService = ProductService.getInstance();
    productService.updateCart();

    router("/cart", () => page = Cart)


    router.start();
</script>

<svelte:component this={page} {id} {productService} />