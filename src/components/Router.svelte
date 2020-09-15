<script>
    import router from "page";
    import Home from '../pages/home/home.svelte';
    import Shop from '../pages/shop/Shop.svelte';
    import ProductPage from '../pages/shop/pages/product-page/ProductPage.svelte'
    let page;

    router('/', () => page = Home)
    router('/shop', () => page = Shop)

    let id;
    router('/shop/:id', (ctx, next) => {id = ctx.params.id; next()}, () => page = ProductPage)

    router.start();
</script>

<svelte:component this={page} />