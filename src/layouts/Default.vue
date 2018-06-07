<template>
<b-container>
    <navbar />
    <router-view />
    <footer>
        <hr class="my-5">
        <b-container class="my-3">
            <p>Urboanatomy &copy;2018</p> 
        </b-container>
        <a href="https://www.contentful.com/" rel="nofollow" target="_blank"><img src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" style="max-width:100px;width:100%;" alt="Powered by Contentful" /></a>
    </footer>
</b-container>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar }
};
</script>
