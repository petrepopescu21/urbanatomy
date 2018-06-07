<template>
    <b-container fluid>
        <h1>What do to in Bucharest</h1>
        <b-row v-if="places">
            <b-col v-for="place in places" :key="place.uid">
                <b-card :title="place.title"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
            <p class="card-text">
                {{place.description}}</p>
        </b-card>
            </b-col>
        </b-row>
        
    </b-container>

</template>

<script>
export default {
  data() {
    return {
      places: null
    };
  },
  created() {
    this.$c
      .getEntries({
        content_type: "places"
      })
      .then(res => {
        this.places=res.items.map(x=>{
            return x.fields
        })
      });
  }
};
</script>
