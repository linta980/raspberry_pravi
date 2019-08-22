<template>
  <v-content >
    <v-container grid-list-md text-xs-center>
    <Navbar />

    <v-layout row wrap >
      <h1 class="headline grey--text ">Control you Pis</h1>
    </v-layout>

    <v-layout row wrap >
      <v-flex xs5 flat>
        <v-card flat>
          <v-card-text :class=" `ma-1 ${btn1_clicked}` " v-on:click="btn1_clicked=!btn1_clicked">
            Ulazna Vrata
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card flat>
          <v-card-text :class=" `ma-1 ${btn2_clicked}` "  v-on:click="btn2_clicked=!btn2_clicked">
           Decija Soba
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card flat>
          <v-card-text :class=" `ma-1 ${btn3_clicked}` " v-on:click="btn3_clicked=!btn3_clicked">
           Hodnik
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card flat>
          <v-card-text :class=" `ma-1 ${btn4_clicked}` " v-on:click="btn4_clicked=!btn4_clicked">
            Kuhinja
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card flat>
          <v-card-text :class=" `ma-1 ${btn5_clicked}` " v-on:click="btn5_clicked=!btn5_clicked">
            Terasa 1
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card flat>
          <v-card-text :class=" `ma-1 ${btn6_clicked}` " v-on:click="btn6_clicked=!btn6_clicked">
            Terasa 2
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card flat>
          <v-card-text :class=" `ma-1 ${btn7_clicked}`  " v-on:click="btn7_clicked=!btn7_clicked">
           Dnevna Soba
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card flat> 
          <v-card-text :class=" `ma-1 ${btn8_clicked}` " v-on:click="btn8_clicked=!btn8_clicked">
            Spavaca Soba
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-switch @click="promeni_ME" :label="label" >
      <v-switch v-model="switch1"></v-switch>
    </v-switch>
    </v-container>
  </v-content>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Main",
  components: { Navbar },
  data: () => ({
    btn1_clicked: false,
    btn2_clicked: false,
    btn3_clicked: false,
    btn4_clicked: false,
    btn5_clicked: false,
    btn6_clicked: false,
    btn7_clicked: false,
    btn8_clicked: false,
    switch1: false,
    label: "Pogasi ih sve , Majku im jebem",

    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  }),
  methods: {
    controlClicked() {
      this.clicked = true;
    },
    promeni_ME() {
      if (this.label != "") {
        this.label = "";
        this.btn1_clicked = false;
        this.btn2_clicked = false;
        this.btn3_clicked = false;
        this.btn4_clicked = false;
        this.btn5_clicked = false;
        this.btn6_clicked = false;
        this.btn7_clicked = false;
        this.btn8_clicked = false;
      } else {
        this.label = "Pogasi ih sve , Majku im jebem";
      }
    },
    click_One() {},
    
  }
};
</script>

<style>
.v-card__text.false {
  background-color: darkgrey;
}
.v-card__text.true {
  background-color: green;
}
</style>
