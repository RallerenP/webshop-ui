<script lang="ts">
    import Center from "../css/center.svelte";
    import { fly } from 'svelte/transition';
    import { onMount } from "svelte";

    export let count: number = 109;
</script>

<Center class="flex-col pr-16 h-14">
    <div class="relative w-14 h-14">
        <i class="fas fa-shopping-bag fa-2x absolute-center scale-25"></i>
        <div class="text-white text-xs absolute-center counter">{count > 99 ? "99+" : count}</div>
    </div>
</Center>

<style lang="scss">
    .absolute-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .scale-25 {
        transform: translate(-50%, -50%) scale(1.35, 1.35) ;
    }

    .counter {
        top: 65%;
    }
</style>