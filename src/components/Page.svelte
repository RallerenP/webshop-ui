<script>
    import { fade } from 'svelte/transition'
    let className;
    export { className as class }
</script>
<div in:fade class="flex h-full w-full flex-col {className}">
    <slot />
</div>