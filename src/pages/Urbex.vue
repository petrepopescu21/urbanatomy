<template>
    <b-container>
        <div v-if="events">
        <b-card v-for="event in events" v-bind:key="event.title" :title="event.title"
                :img-src="$i(event.image,600)"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
            <p class="card-text">
            Highlights: <template v-for="highlight in event.highlights">{{highlight}}</template>, etc.</p>
            <b-button :to="page+event.uid" variant="primary">View and Book</b-button>
        </b-card>
        </div>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            events: null,
            page: '/urbex/'
        }
    },

    created() {
        this.$c.getEntries({
            content_type:"urbex"
        }).then(response=>{
            console.log(response)
            this.events = response.items.map(item=>{
                return item.fields
            })
        })
    }
}
</script>
