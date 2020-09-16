<script lang="ts">
	import Tailwind from "./components/css/tailwind.svelte"
	import Header from "./components/Header.svelte";
	import Router from "./components/Router.svelte";
	import Global from './components/css/global.svelte'
	import TopCarouselBanner from './components/top-carousel-banner/top-carousel-banner.svelte';
	import ProductService from "./backend/services/product.service";

	const ps = new ProductService();
	ps.products();
</script>

<Tailwind />
<Global />
<Header />
<TopCarouselBanner />

<main class="flex-grow">
	<Router />
</main>

<style lang="scss">
	main {
	}
</style>