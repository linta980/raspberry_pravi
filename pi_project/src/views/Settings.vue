<template>
  <v-content>
    <Navbar />

    <v-row class="px-2">
      <v-col v-for="(element, index) in getAllStan" :key="index" cols="12" lg="3">
        <v-card>
          <v-card-title>{{element.name}}</v-card-title>
          <v-card-text>
            <v-btn
              rounded
              v-on:click="changeState1(index)"
              v-bind:class="[element.active? 'green':'red']"
            >{{element.active? 'on':'off'}}</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row class="px-2">
      <v-col v-for="(element,index) in getAllStan2" :key="index" cols="12" lg="3">
        <v-card >
          <v-card-title>{{element.name}}</v-card-title>
          <v-card-text>
            <v-btn
              v-on:click="changeState2(index)"
              v-bind:class="[element.active? 'green':'red']"
              rounded
            >{{element.active? 'on':'off'}}</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>-->

    <v-card>
      <v-card-title>Kamera sa gajbe</v-card-title>

      <v-card-text>
        <v-img src="https://eyeplus.closeli.com/device/live?deviceId=xxxxS_304a26c41280&did=1535751&shareid=">
        </v-img>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script >
import Navbar from "../components/Navbar";
import { mapGetters } from "vuex";
import io from "socket.io-client";
export default {
  name: "Settings",
  components: { Navbar },
  data() {
    return {
      color: ""
    };
  },
  methods: {
    changeState1(index) {
      this.$store.dispatch("changeStateOfStan", index);

      var socket = io.connect("http://192.168.0.6:4000");
      socket.on("load", data => {
        console.log(data);
      });
      socket.emit("gpio", index);
    }
    // changeState2(index) {
    //   this.$store.dispatch("changeStateOfStan2", index);
    //     var socket = io.connect("http://192.168.0.6:4000");
    //   socket.on("load", data => {
    //     console.log(data);
    //   });
    //   socket.emit("gpio", index);
    // }
  },
  moounted: {},
  computed: {
    ...mapGetters(["getAllStan", "getAllStan2"])
  }
};
</script>

<style scoped>
.v-btn.on {
  background-color: green;
}
/* .Hodnik {
  background-color: aqua;
}
.v-btn.off {
  background-color: red;
}
.kurac {
  background-color: aqua;
} */
</style>