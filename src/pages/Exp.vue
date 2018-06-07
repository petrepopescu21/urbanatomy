<template>
    <b-container fluid v-if="event">
        <img :src="$i(event.image,800,250)" class="responsive-image">
        <h1>{{event.title}}</h1>
        <p>{{event.descriere}}</p>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            event: null
        }
    },
    created() {
        this.$c.getEntries({
            "fields.uid": this.$route.params.id,
            "content_type": "urbex"
        }).then(res=>{
            this.event = res.items[0].fields
        })
    }
}

</script>

<style>
.responsive-image {
    width: 100%;
}
</style>
