<script>
    import { ENDPOINT } from "../backend/api/endpoints";
    import { onMount } from 'svelte';
    import router from 'page';
    let className;

    export { className as class };
    export let name;
    export let code;
    export let tag = null;
    export let id;

    let src = null;

    onMount(async () => {
        src = ENDPOINT.IMAGE(code);
        console.log(src);
    })

    const productClick = () => { router(`/shop/${id}`) }
</script>

    <div on:click={ () => productClick() } class="flex flex-col duration-300 cursor-pointer transition-all hover:shadow-2xl {className} relative">
        {#if tag}
            <div class="absolute top-0 left-0 p-1 px-2 bg-black text-white font-thin">{tag}</div>
        {/if}
        <div class="flex-shrink">
            <img alt="Image of {name}" src="{src}">
        </div>

        <p class="text-center font-thin">{name}</p>
    </div>

<style>
    img {
        object-fit: cover;
    }
</style>