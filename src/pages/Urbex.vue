<template>
    <b-container>
        <h1 class="mt-4">Urban Experiences</h1>
        <hr class="my-4">
        <h5>Ut pellentesque est quis elit ullamcorper, at imperdiet diam iaculis. Nam non convallis ante. Nulla facilisi. Vestibulum sed velit scelerisque, imperdiet justo non, tempus nisl. Morbi ornare dui ut nisl ornare hendrerit. Cras eu consequat dui, et varius ligula. Cras maximus, ex nec lacinia vulputate, purus lectus scelerisque lectus, a vestibulum ligula nisl vitae diam. Pellentesque dictum fringilla porta. Nam nec enim eget justo tincidunt vestibulum.</h5>
        <div class="mt-4" v-if="events">
        <b-row fluid>
        <b-col sm="12" md="6" lg="4" v-for="event in events" v-bind:key="event.uid">
        <b-card :title="event.title"
                :img-src="$i(event.image,600)"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
            <p class="card-text">
                {{event.summary}}</p>
            <b-button :to="page+event.uid" variant="primary">View and Book</b-button>
        </b-card>
        </b-col>
        </b-row>
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
