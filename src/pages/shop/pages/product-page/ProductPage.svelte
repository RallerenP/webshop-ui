<script lang="ts">
    import Page from "../../../../components/Page.svelte";
    import ProductPageContainer from "./components/product-page-container/ProductPageContainer.svelte";
    import BreadCrumbContainer from "./components/product-page-container/breadcrum-container/BreadCrumbContainer.svelte";
    import Breadcrumbs from "../../../../components/breadcrumbs/Breadcrumbs.svelte";
    import { ENDPOINT } from '../../../../backend/api/endpoints';
    import { onMount } from 'svelte';
    import ProductService from "../../../../backend/services/product.service";
    import ProductContainer from "./components/product-page-container/product-container/ProductContainer.svelte";
    import ImagePane from "./components/product-page-container/product-container/image-pane/ImagePane.svelte";
    import { markdown } from 'markdown';

    let name = "Real Apples";
    export let productService: ProductService;
    export let id: number;

    let product;

    const getDesc = () => { return markdown.toHTML(product.desc) }

    const addProductToCart = () => { productService.addToCart(id) }

    onMount(async () => {
        product = await productService.product(id);
    })



</script>

{#if product}
<Page>
    <ProductPageContainer>
        <BreadCrumbContainer>
            <Breadcrumbs breadcrumbs="{[{text: 'Home', link: '/'}, {text: 'Shop', link: '/shop'}, {text: product.name}]}" />
        </BreadCrumbContainer>
        <ProductContainer>
            <ImagePane src="{ENDPOINT.IMAGE(product.code)}" desc={getDesc()} />
            <div class="flex w-1/2">
                <div class="flex pane product-page-right flex-col font-thin">
                    <p class="font-thin text-xl">{product.name}</p>
                    <br>
                    <p class="text-xs text-gray-500 font-thin">Product: APPLE_SNACK_BOX</p>
                    <br class="mb-6">

                    <div class="flex flex-row items-center">
                        <input type="text" class="h-8 w-16 text-center font-thin border" value="1">
                        <p class="px-4">${product.price}/item</p>
                    </div>

                    <br class="mb-6">
                    <button on:click={addProductToCart} class="border text-white border-white h-8 w-64 text-sm font-thin">Add to cart</button>
                </div>
            </div>
        </ProductContainer>
    </ProductPageContainer>
</Page>

<style lang="scss">
    .pane {
        margin: 25px;
    }

    input {
        border-color: #666;
    }

    button {
        background: #666
    }





</style>

{/if}