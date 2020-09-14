<script lang="ts">
    import Center from "../css/center.svelte";

    export let count: number = 109;
</script>

<Center class="flex-col pr-4 h-14">
    <div class="relative w-14 h-14">
        <i class="fas fa-shopping-bag fa-2x absolute-center"></i>
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

    .counter {
        top: 60%;
    }

    


</style>