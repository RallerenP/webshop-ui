<script lang="ts">
    export let breadcrumbs;
</script>

<p class="">
    {#each breadcrumbs as crumb}
        {#if crumb.link}
            <a class=" font-thin text-gray-700 hover:underline" href="{crumb.link}">{crumb.text}</a>
        {:else}
            { crumb.text }
        {/if}
        {" / "}
    {/each}
</p>

