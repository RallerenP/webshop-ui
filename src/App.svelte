<script lang="ts">
    import Tailwind from "./components/css/tailwind.svelte"
	import Header from "./components/header.svelte";
</script>

<Tailwind />
<Header />
<main>
    <h1 class="text-red-400">The rest of our app will be here</h1>
</main>

<style lang="scss">
	main {
		h1 {
			font-size: 200px;
		}
	}
</style>