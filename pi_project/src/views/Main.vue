<template>
  <v-content v-if="pali_content" id="kurac">
    <Navbar />
    <v-row class="text--center mt-3 display-3 justify-center">Beograd</v-row>
    <v-row
      class="justify-center mt-5" 
    >Temperatura u Beogradu je trenutno : {{this.vreme.main.temp}} C</v-row>
    <v-row class="justify-center mt-5">Vlaznost vazduha je : {{this.vreme.main.humidity}} %</v-row>
    <v-row class="justify-center mt-5">Pritisak je: {{this.vreme.main.pressure}} mBar-a</v-row>
    <v-row class="justify-center mt-5">Vreme je pretezno: {{this.vreme.weather[0].description}}</v-row>
    <v-row class="justify-center mt-5">Vetar duva brzinom od: {{this.vreme.wind.speed}} m/S</v-row>



    <v-row v-if="ima_kise" class="justify-center mt-5">
      <v-img
        src="../../images/rain.jpg"
        
        aspect-ratio="1"
        class="grey lighten-2"
        max-width="500"
        max-height="500"
      ></v-img>
    </v-row>
    <v-row v-if="broken_clouds" class="justify-center mt-5">
      <v-img
        src="../../images/broken_clouds.png"
        
        aspect-ratio="1"
        class="grey lighten-2"
        max-width="500"
        max-height="500"
      ></v-img>
    </v-row>
    <i class="material-icons " title>cloud_queue</i>
  </v-content>
</template>

<script>
import Navbar from "../components/Navbar";
import axios from "axios";
export default {
  name: "Main",
  components: { Navbar },
  data: () => ({
    vreme: [],
    pali_content:false,
    ima_kise:false,
    broken_clouds:false
  }),
  methods: {},
  mounted() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Belgrade,Serbia&APPID=cb0aeb43b8923a51cfbda7edaf4ac7c6&units=metric"
      )
      .then(result => {
        this.vreme = result.data;
        this.pali_content=true // oce da mi izbaci
                                // gresku jer ne dobije podatke sa axiosa a
                                // vec je iscrtao sve elemente na strani i zvajzne
          // if(this.vreme.weather[0].description.includes("rain")){
          //   this.ima_kise=true;
          // }
          // if(this.vreme.weather[0].description.includes("clouds")){
          //   this.broken_clouds=true;
          // }
      });
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
#kurac{
  /* background-image: url("../../images/background.jpg");
  background-size: 100% 100% */

}
</style>
