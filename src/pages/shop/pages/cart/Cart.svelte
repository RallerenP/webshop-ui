<script>
    import Page from "../../../../components/Page.svelte";
    import ProductService from "../../../../backend/services/product.service";

    let cart = ProductService.getInstance().getCartStore();
    let items;


</script>

<Page class="flex flex-col items-center">
    <div class="w-2/4 h-full p-16 flex flex-col items-center align-middle">
        <div class="flex-grow  w-full">
            {#each $cart.items as item}
                <div class="h-32 border-gray-300 border-t border-b m-1 flex">
                    <div class="text-2xl font-thin flex items-center justify-center">
                        {item.product.name} <span class="mx-4 text-lg text-gray-600">x</span> {item.amount}
                    </div>
                    <div class="flex-grow"></div>
                    <div class="text-2xl font-thin flex items-center justify-center">${item.product.price * item.amount}</div>
                </div>
            {/each}
        </div>
    </div>
</Page>