<script>

import CartBtn from "./header/cart-btn.svelte";
import Navlink from "./header/navlink.svelte";
import Logo from "./Logo.svelte";

</script>

<div class="border-gray-300 border-b flex flex-row justify-center h-24 py-4 px-6 flex-shrink-0" >
    <Logo class="flex justify-center flex-col align-middle pl-16"/>
    <div class="flex-grow"></div>
    <div class="
            flex justify-center flex-col align-middle 
            px-16
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
