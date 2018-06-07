<template>
<b-container>
    <navbar />
    <router-view />
    <footer>
        <hr class="my-5">
        <b-container class="my-3">
            <p>Urboanatomy &copy;2018</p> 
        </b-container>
    </footer>
</b-container>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar }
};
</script>
