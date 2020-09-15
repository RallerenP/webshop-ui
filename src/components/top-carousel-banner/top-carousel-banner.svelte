<script lang="ts">
    import { fly } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    const content: string[] = ["Try our new flavor: Apple", "The snack-bars can't speak!", "Don't listen to them!", "Snack-bars have apple souls!"]

    let counter: number = 0;

    const incrementCounter = () => { counter = (counter + 1) % content.length};

    let interval;

    onMount(async () => {
        interval = setInterval(() => {
            incrementCounter();
        }, 5000);
    });

    onDestroy(() => {
        clearInterval(interval);
    })
</script>

<div class="bg-black h-16 relative overflow-hidden w-screen flex-shrink-0">
    {#each content as text, index}
        {#if ( content[counter] === text ) }
            <p in:fly|local={{x: 2000, duration: 1000}} out:fly|local={{x: -2000, duration: 1000}}  class="absolute-center text-white font-thin text-lg">{text}</p>
        {/if}
    {/each}
</div>