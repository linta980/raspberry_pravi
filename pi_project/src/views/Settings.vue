<template>
  <v-container>
    <Navbar/>
    <v-container class="mt-5 px-5 mx-5">
      <v-layout row>
        <v-flex xs12 sm6 md6 class="ma-1">
          <v-card>
            <v-card-title>Dnevna soba</v-card-title>
            <v-card-actions>
              <v-btn v-on:click="changeState(1)" flat v-bind:class="`${state1}`">{{state1}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 class="ma-1">
          <v-card>
            <v-card-title>Spavaca soba</v-card-title>
            <v-card-actions>
              <v-btn v-on:click="changeState(2)" flat v-bind:class="`${state2}`">{{state2}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 class="ma-1">
          <v-card>
            <v-card-title>Hodnik</v-card-title>
            <v-card-actions>
              <v-btn v-on:click="changeState(3)" flat v-bind:class="`${state3}`">{{state3}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 class="ma-1">
          <v-card>
            <v-card-title>Terasa</v-card-title>
            <v-card-actions>
              <v-btn v-on:click="changeState(4)" flat v-bind:class="`${state4}`">{{state4}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 md6 class="ma-1">
          <v-card>
            <v-card-title>Terasa 2</v-card-title>
            <v-card-actions>
              <v-btn v-on:click="changeState(5)" flat v-bind:class="`${state5}`">{{state5}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 class="ma-1">
          <v-card>
            <v-card-title>Kupatilo</v-card-title>
            <v-card-actions>
              <v-btn v-on:click="changeState(6)" flat v-bind:class="`${state6}`">{{state6}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 class="ma-1">
          <v-card>
            <v-card-title>Garaza</v-card-title>
            <v-card-actions>
              <v-btn v-on:click="changeState(7)" flat v-bind:class="`${state7}`">{{state7}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 class="ma-1">
          <v-card>
            <v-card-title>Travnjak</v-card-title>
            <v-card-actions>
              <v-btn v-on:click="changeState(8)" flat v-bind:class="`${state8}`">{{state8}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <!-- <v-layout row wrap  class="justify-center">

          <v-card>
              <v-card-title>Pi buttons</v-card-title>
      </v-card>-->
      <!-- <v-card flat>
          <v-card-actions >
            <v-btn class="success text-lowercase" >Svetlo Dnevna soba</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn class="success text-lowercase " >Svetlo Hodnik brate</v-btn>
          </v-card-actions>
          <v-card-actions class="justify-right">
            <v-btn class="success text-lowercase" >Svetlo Kuhinja</v-btn>
          </v-card-actions>
          <v-card-actions class="justify-right">
            <v-btn class="success text-lowercase" >Svetlo Terasa</v-btn>
          </v-card-actions>
        </v-card>
        <v-card flat>
          <v-card-actions class="justify-right">
            <v-btn class="success text-lowercase" >Svetlo terasa 2</v-btn>
          </v-card-actions>
          <v-card-actions class="justify-right">
            <v-btn class="success text-lowercase" >Svetlo ispred zgrade</v-btn>
          </v-card-actions>
          <v-card-actions class="justify-right">
            <v-btn class="success text-lowercase" >Bojler</v-btn>
          </v-card-actions>
          <v-card-actions class="justify-center">
            <v-btn class="success text-lowercase" >Klima</v-btn>
          </v-card-actions>
      </v-card>-->
      <!-- 
        <v-flex sm6>
          <v-btn class="success text-lowercase">Svetlo Hodnik</v-btn>
        </v-flex>
        <v-flex sm6>
          <v-btn class="success text-lowercase">Svetlo Kuhinja</v-btn>
        </v-flex>
        <v-flex sm6>
          <v-btn class="success text-lowercase">Svetlo Kuhinja</v-btn>
        </v-flex>
        <v-flex sm6>
          <v-btn class="success text-lowercase">Svetlo Kuhinja</v-btn>
        </v-flex>
        <v-flex sm6>
          <v-btn class="success text-lowercase">Svetlo Kuhinja</v-btn>
        </v-flex>
        <v-flex sm6>
          <v-btn class="success text-lowercase">Svetlo Kuhinja</v-btn>
        </v-flex>
        <v-flex sm6>
          <v-btn class="success text-lowercase">Svetlo Kuhinja</v-btn>
      </v-flex>-->
      <!-- </v-layout> -->
    </v-container>
  </v-container>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Settings",
  components: { Navbar },
  data() {
    return {
      state1: "On",
      state2: "On",
      state3: "On",
      state4: "On",
      state5: "On",
      state6: "On",
      state7: "On",
      state8: "On"
    };
  },
  methods: {
    changeState(stausic) {
      let x = "state" + stausic;
      switch (x) {
        case "state1":
          if (this.state1 === "On") {
            this.state1 = "Off";
          } else {
            this.state1 = "On";
          }
          break;

        case "state2":
          if (this.state2 === "On") {
            this.state2 = "Off";
          } else {
            this.state2 = "On";
          }
          break;

        case "state3":
          if (this.state3 === "On") {
            this.state3 = "Off";
          } else {
            this.state3 = "On";
          }
          break;

        case "state4":
          if (this.state4 === "On") {
            this.state4 = "Off";
          } else {
            this.state4 = "On";
          }
          break;

        case "state5":
          if (this.state5 === "On") {
            this.state5 = "Off";
          } else {
            this.state5 = "On";
          }
          break;

        case "state6":
          if (this.state6 === "On") {
            this.state6 = "Off";
          } else {
            this.state6 = "On";
          }
          break;

        case "state7":
          if (this.state7 === "On") {
            this.state7 = "Off";
          } else {
            this.state7 = "On";
          }
          break;

        case "state8":
          if (this.state8 === "On") {
            this.state8 = "Off";
          } else {
            this.state8 = "On";
          }
          break;
      }
    }
  }
};
</script>

<style>
.On {
  background: #45b80f;
}
.Off {
  background: rgba(252, 5, 5, 0.973);
}
</style>
