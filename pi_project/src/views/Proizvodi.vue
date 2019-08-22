<template>
  <v-content>
    <Navbar />

    <!-- Izaberi proizvod -->
    <v-layout row wrap>
      <v-flex md4 xs12 offset-sm4 class="my-3">
        <v-select
          v-model="select_proizvodi"
          :items="getAllProductTypes"
          label="Proizvodi"
          required
          @change="event_na_promenu_proizvoda($event)"
        ></v-select>
      </v-flex>
    </v-layout>

    <!-- Prikazi proizvode -->
    <v-layout row wrap>
      <v-flex
        xs12
        md3
        v-for="(proizvod ,index) in getOnChangeProizvodi"
        :key="index"
        class="ma-5 border-style: solid"
      >
        <!-- --------------------------- -->

        <div class="text-center" v-on:click="getPIcIndex(`${index}`)">
          <v-dialog v-model="dialog" width="600" >
            <template v-slot:activator="{ on }">
              <v-img class="white-text" v-bind:src="proizvod.slika" dark v-on="on">
                <v-icon style=" position: absolute; right: 0px; bottom:0px">add_shopping_cart</v-icon>
              </v-img>
              <br />
            </template>

            <v-card>
              <v-card-actions>
                <v-img class="white-text" v-bind:src="getOnChangeProizvodi[index].slika" >
                <v-icon style=" position: absolute; right: 0px; bottom:0px">add_shopping_cart</v-icon>
              </v-img>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <!-- ---------------------- -->

        <!-- Slika Proizvoda -->
        <!-- <v-img class="white-text" v-bind:src="proizvod.slika">
          <v-icon style=" position: absolute; right: 0px; bottom:0px">add_shopping_cart</v-icon>
        </v-img>
        <br />-->

        <div class="align-center justify">
          <span class="text-align left">Model : {{proizvod.model}}</span>
          <br />
          <span class="text-align left">Proizvodjac : {{proizvod.proizvodjac}}</span>
          <br />
          <span class="text-align left">Stanje:</span>
          <br />

          <div
            class="text-align left position:relative;"
            v-for="(data,index) in proizvod.model_velicina"
            :key="index"
          >
            <p class v-if="data!=0">{{index}} : {{data}}</p>
            <br />
            <br />
          </div>
          <br />
        </div>

        <span></span>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import Navbar from "../components/Navbar";
import db from "../fb";

import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Proizvodi",
  components: {
    Navbar
  },
  data() {
    return {
      proizvodi: [],
      items: [],
      select_proizvodi: "",
      dialog: false,
      picIndex:''
    };
  },
  methods: {
    event_na_promenu_proizvoda(eventic) {
      this.$store.dispatch("onChangeProizvodi", eventic);
    },
    getPIcIndex(index){
      this.picIndex = index
    }
  },
  computed: mapGetters(["getAllProductTypes", "getOnChangeProizvodi"]),
  mounted() {
    this.$store.dispatch("removeAllProductsOnLand");
    this.$store.dispatch("fetchAllProductTypes");
  }
};
</script>

<style>
/* .flex{
  border-style: solid;
  border-color: rgba(0,0,0,.3);
} */
</style>
