<script lang="ts">
    import ProductElement from "../../../../components/Product.svelte";
    import { onMount } from 'svelte';
    import Product from "../../../../backend/models/product";
    import ProductService from "../../../../backend/services/product.service";

    export let productService: ProductService;

    let products: Product[] = null;

    onMount(async () => {
        products = await productService.products();
    })
</script>

<div class="flex-grow-0 m-8 shop-item-container">
    {#if products}
        {#each products as product}
            <ProductElement name={product.name} code="{product.code}" class="product flex-grow-0 flex-shrink-0  product" />
        {/each}
    {/if}
</div>

<style lang="scss">
    .shop-item-container {
        display: grid;
        grid-template-columns: repeat(4, 350px);
        grid-gap: 6rem;
        padding: 6rem;
        justify-content: space-between;

        :global(.product) {
            flex: 0 0 auto;
            height: 350px;
        }
    }


</style>