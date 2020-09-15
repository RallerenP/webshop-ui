<script>
    import Page from "../../../../components/Page.svelte";
    import ProductPageContainer from "./components/product-page-container/ProductPageContainer.svelte";
    import BreadCrumbContainer from "./components/product-page-container/breadcrum-container/BreadCrumbContainer.svelte";
</script>

<Page>
    <ProductPageContainer>
        <BreadCrumbContainer>
            <p><a href="/">Home</a> / <a href="/shop">Shop</a> / Real Apples</p>
        </BreadCrumbContainer>
        <div class="flex flex-grow">
            <div class="flex flex-col h-full w-1/2">
                <div class="w-full h-12 ">
                    <div class="product-page-image border-black border mb-8">
                        <img src="/images/go-bars-box.png">
                    </div>
                    <p class="font-thin">
                        Wow. You just could not choose <b>ANY</b> of the other products, could you? So you just had try one of each, huh?
                        <br>
                        <br>
                        I mean, it's a bit greedy. It takes 8 apples souls to create this box after all.
                    </p>
                </div>
            </div>
            <div class="flex w-1/2">
                <div class="flex pane product-page-right flex-col font-thin">
                    <p class="font-thin text-xl">Real Apple™ Box of Apple Snack-Bar</p>
                    <br>
                    <p class="text-xs text-gray-500 font-thin">Product: APPLE_SNACK_BOX</p>
                    <br class="mb-6">

                    <input type="text" class="h-8 w-16 text-center font-thin border" value="1">
                    <br class="mb-6">
                    <button class="border text-white border-white h-8 w-64 text-sm font-thin">Add to cart</button>
                </div>
            </div>
        </div>
    </ProductPageContainer>
</Page>

<style lang="scss">


    .product-page-image {
        height: ((850px / 2));
    }

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