<template>
    <b-container fluid>
        <b-img v-if="event"
               :src="$i(event.image,1080,540)"
               class="responsive-image"
               fluid />
        <b-row class="mt-5"
               v-if="event">
            <b-col md="7">
                <h1>{{event.title}}</h1>
                <div>
                    <b-badge class="highlight-badge"
                             v-for="(highlight,index) in event.highlights"
                             :key="index">{{highlight}}</b-badge>
                </div>
                <p class="mt-4">{{event.descriere}}</p>
            </b-col>
            <b-col md="5">
                <b-card title="Details">
                    <p class="card-text">
                        <b>Price:</b> EUR{{event.price}}
                        <br/>
                        <b>Minimum age (recommended):</b> {{event.minAge}}
                        <br/>
                        <b>Language(s):</b>
                        <template v-for="lang in event.languages">{{lang}}; </template>
                        <br />
                        <b>Start time:</b> {{event.startTime}}
                        <br />
                        <b>Meetup point:</b> {{event.meetupText}}
                        <a href="#map">
                            <em>View Map</em>
                        </a>
                        <br />
                        <b>Duration:</b> {{event.duration}}
                        <br />
                        <b>Group size:</b> {{event.minGroupSize}} - {{event.maxGroupSize}}
                    </p>
                    <b-button v-b-modal.modal1
                              variant="primary">Book Now</b-button>
                </b-card>
            </b-col>
        </b-row>
        <hr class="my-5">
        <b-row v-if="event">
            <b-col>
                <h3 class="mb-4"
                    id="map">Meetup Location</h3>
                <gmap-map :center="location"
                          :zoom="16"
                          style="width:100%;  height: 400px;">
                    <gmap-marker :position="location"></gmap-marker>
                </gmap-map>
            </b-col>
        </b-row>
        <b-modal id="modal1"
                 title="Book now">
            <div>
                <b-form>
                    <b-form-group id="exampleInputGroup1"
                                  label="Email address:"
                                  label-for="exampleInput1"
                                  description="We'll never share your email with anyone else.">
                        <b-form-input id="exampleInput1"
                                      type="email"
                                      v-model="form.email"
                                      required
                                      placeholder="Enter email">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="exampleInputGroup2"
                                  label="Your Name:"
                                  label-for="exampleInput2">
                        <b-form-input id="exampleInput2"
                                      type="text"
                                      v-model="form.name"
                                      required
                                      placeholder="Enter name">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="dateGroup"
                                  label="Desired Date:"
                                  label-for="dateInput">
                        <datepicker input-class="form-control"
                                    v-model="form.date"
                                    name="uniquename"></datepicker>
                    </b-form-group>
                    <b-form-group id="exampleInputGroup3"
                                  label="Number of people:"
                                  label-for="exampleInput3">
                        <b-form-input id="exampleInput3"
                                      type="number"
                                      v-model="form.count"
                                      required
                                      placeholder="Group Size">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="exampleInputGroup4"
                                  label="Total Price:"
                                  label-for="exampleInput4">
                        <div class="form-control">EUR {{this.total}}</div>
                    </b-form-group>
                </b-form>
            </div>
        </b-modal>
    </b-container>
</template>

<script>
import dropin from "braintree-web-drop-in";
import axios from "axios";
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      event: null,
      mapElement: null,
      form: {
        email: null,
        name: null,
        checked: null,
        count: 1,
        date: null
      }
    };
  },
  created() {
    this.$c
      .getEntries({
        "fields.uid": this.$route.params.id,
        content_type: "urbex"
      })
      .then(res => {
        this.event = res.items[0].fields;
      });
  },
  computed: {
    location() {
      return {
        lat: this.event.meetupLocation.lat,
        lng: this.event.meetupLocation.lon
      };
    },
    total: {
      get() {
        if (this.event == null) return 0;
        else return this.event.price * this.form.count;
      }
    }
  },
//   mounted() {
//     axios.get("https://coltalbdonations.herokuapp.com/getToken").then(res => {
//       dropin.create(
//         {
//           authorization: res.data.clientToken,
//           container: "#paymentContainer",
//           card: {
//             cardholderName: true,
//             overrides: {
//               styles: {}
//             }
//           }
//         },
//         (err, instance) => {
//           this.payment_instance = instance;
//         }
//       );
//     });
//   },
  watch: {
      form(val) {
          if(val.count!=Math.floor(val.count))
            this.form.count = Math.floor(val.count)
      }
  }
};
</script>

<style>
.responsive-image {
  width: 100%;
}

.highlight-badge {
  margin-left: 5px;
}

.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
