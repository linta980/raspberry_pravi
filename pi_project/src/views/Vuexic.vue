<template>
  <v-content class="mt-5" wrap>
    <Navbar />

    <v-form class="mx-3">
      <v-layout row wrap centar>
        <v-flex xs6 md6>
          <v-text-field v-model="add_new" placeholder="Add new todo"></v-text-field>
        </v-flex>
        <v-flex xs4 md3 class="py-2">
          <v-btn v-on:click="addNewTodos">Submit</v-btn>
        </v-flex>
      </v-layout>
    </v-form>


<!-- Iscrtaj Majice -->
    <v-layout row wrap>
      <v-flex
        xs12
        md3
        pa-1
        v-for="(todo,index) in getAllMajice"
        :key="index"
        v-on:click="edit(todo.proizvodjac)"
      >
        <v-card>
          <v-card-title primary-title>
            <div>
              <div>{{todo.model}}</div>
            </div>
          </v-card-title>
          <v-img :src="todo.slika"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
 
 
 
  </v-content>
</template>

<script>
import Navbar from "../components/Navbar";
import { mapGetters, mapMutations, mapActions } from "vuex";

import axios from "axios";
import db from "../fb";

export default {
  name: "Vuexic",
  data() {
    return {
      add_new: ""
    };
  },
  methods: {

    //Ovo je prvo opcija da odavde radim poziv ka firebase-u 
    // avioni() {
    //   let response = [];
    //   db.collection("Majice")
    //     .get()
    //     .then(res => {
    //       res.forEach(element => {
    //         response.push({
    //           model: element.data().model,
    //           slika: element.data().slika,
    //           model_velicina: element.data().model_velicina,
    //           proizvodjac: element.data().proizvodjac
    //         });
    //       });
    //       this.$store.commit("setAllMajice", response);
    //       console.log(response);
    //     });
    // },
    addNewTodos() {

    },
    edit(event){
      console.log(event)
    }
  },
  components: { Navbar },
  computed: mapGetters(["getAllMajice"]),
  mounted() {
    // Mogu odavde direkt da pozivam bazu ali mislim da je lose
    

    //A mogu i odavde , sto jebeno ima smislia , sav async kod je na akciji u store-u a odavde zovem sta mi treba 
    //od akcija a u compute pozovem mapgetters
    this.$store.dispatch('fetchAllMajice')
  }
};
</script>

<style>
</style>
