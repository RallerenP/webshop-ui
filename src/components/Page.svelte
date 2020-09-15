<script>
    import { fade } from 'svelte/transition'
</script>
<div in:fade class="flex h-full w-full flex-col">
    <slot />
</div>