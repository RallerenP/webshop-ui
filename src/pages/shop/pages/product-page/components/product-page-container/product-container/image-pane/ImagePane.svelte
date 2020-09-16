<script>
    export let src;
    export let desc;
</script>

<div class="flex flex-col h-full w-1/2">
    <div class="w-full h-12 ">
        <div class="product-page-image border-black border mb-8">
            <img {src} />
        </div>
        <div class="font-thin description">
            {@html desc}
        </div>
    </div>
</div>

<style lang="scss">
    .product-page-image {
        height: calc(850px / 2);
    }

    :global(.description) {
        :global(p) {
            padding: 1rem 15px;
        }
    }
</style>