<script>
    import { fade } from 'svelte/transition'
    import Page from "../../components/Page.svelte";
    import ShopDescription from './components/shop-description/ShopDescription.svelte';
    import ShopGrid from './components/shop-grid/ShopGrid.svelte';
    import ProductService from "../../backend/services/product.service";

    const ps = new ProductService();
</script>

<Page>
    <ShopDescription />
    <ShopGrid productService="{ps}" />
</Page>


