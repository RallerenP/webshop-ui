<script lang="ts">
    let className: string;
    export {className as class};
</script>

<div class="flex align-middle justify-center {className}">
    <slot />
</div>