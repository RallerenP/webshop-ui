<script>

import CartBtn from "./header/cart-btn.svelte";
import Navlink from "./header/navlink.svelte";
import Logo from "./logo.svelte";

</script>

<div class="h-16 border-gray-300 border-b flex flex-row justify-center">
        <Logo class="flex justify-center flex-col align-middle px-6"/>
    <div class="flex-grow"></div>
    <div class="
            flex justify-center flex-col align-middle 
            px-6 
            font-light text-lg  uppercase
            cursor-pointer"
            >
        <div class="flex flex-row">
            <Navlink  href="/">HOME</Navlink>
            <Navlink href="/shop">SHOP</Navlink>
            <Navlink href="/about">ABOUT US</Navlink>
        </div>
    </div>
    <CartBtn />
</div>

<style lang="scss">
    div {
        
        
    }
</style>