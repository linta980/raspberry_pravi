<template>
  <v-content>
    <Navbar />

    <!-- DIalog for adding new product -->
    <v-layout justify-center>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn class="success text-none mt-5" v-on="on">
            <v-icon class="mr-3">add_circle</v-icon>
            <span>Add new Proizvod</span>
          </v-btn>
        </template>

        <!-- Dodavanje NOVOG proizvoda -->
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Add new Proizvod</v-card-title>

          <v-card-text>
            <v-text-field v-model="new_product" label="New Proizvod"></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field v-model="new_product_model" label="Model Novog Proizvoda"></v-text-field>
          </v-card-text>

          <v-card-text>
            <v-text-field v-model="new_proizvodjac" label="Ime Proizvodjaca"></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-flex left class="ml-3">
              <v-btn right class="primary ml-0" v-on:click="fileUpload">Upload File</v-btn>
            </v-flex>
            <v-flex>
              <input
                type="file"
                accept="image/*"
                ref="fileUpload"
                style="display:none"
                @change="onFilePicked"
              />
              <input />
            </v-flex>
          </v-card-text>
          <v-divider class="mt-3"></v-divider>

          <v-card-actions v-if="submit_button">
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="send_new_Proizvod">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <!--Dodavanje kolicine i velicine u firebase  -->

    <!-- <v-layout  justify-center> -->
    <v-row class="px-5 " justify="space-around">
      <v-col class="d-flex" cols="12" sm="4"   >
        <v-select
          v-model="select_proizvodi"
          :items="proizvodi"
          label="Proizvodi"
          required
          @change="onChangeProizvodi($event)"
        ></v-select>
      </v-col>
    </v-row>

    <v-row  class="px-5" justify="space-around">
      <v-col class="d-flex" cols="12" sm="4" >
      <v-select
        v-model="select_mod"
        :items="select_model"
        label="Model"
        required
        @change="onChangeModel($event)"
      ></v-select>
      </v-col>
    </v-row>

    <v-row  class="px-5" justify="space-around">
      <v-col class="d-flex" cols="12" sm="4">
      <v-text-field v-model="kolicina" label="Kolicina" required></v-text-field>
      </v-col>
    </v-row>

    <v-row  class="px-5" v-if="prikazi_za_sve_ostalo" justify="space-around">
      <v-col class="d-flex" cols="12" sm="4" >
      <v-select v-model="select_velicina" :items="velicine_majice" label="Velicina" required></v-select>
      </v-col>
    </v-row>
    <v-row  class="px-5" v-if="prikazi_ako_je_patika" justify="space-around">
      <v-col class="d-flex" cols="12" sm="4" align="center">
      <v-select v-model="select_velicina" :items="velicine_patike" label="Velicina" required></v-select>
      </v-col>
    </v-row>

    <v-row  class="px-5" justify="space-around">
      <v-col class="d-flex" cols="12" sm="4">
      <v-select v-model="select_proizvodjac" :items="proizvodjaci" label="Proizvodjaci" required></v-select>
      </v-col>
    </v-row>

    <!-- </v-layout> -->

    <!-- <v-layout  justify-center>
      <v-flex md5 xs12 class="px-5" >
        <v-select
          v-model="select_proizvodi"
          :items="proizvodi"
          label="Proizvodi"
          required
          @change="onChangeProizvodi($event)"
        ></v-select>
      </v-flex>

      <v-flex md5 xs12 class="px-5">
        <v-select
          v-model="select_mod"
          :items="select_model"
          label="Model"
          required
          @change="onChangeModel($event)"
        ></v-select>
      </v-flex>

      <v-flex md5 xs12 class="px-5">
        <v-text-field v-model="kolicina" label="Kolicina" required></v-text-field>
      </v-flex>

      <v-flex md5 xs12 class="px-5" v-if="prikazi_za_sve_ostalo">
        <v-select v-model="select_velicina" :items="velicine_majice" label="Velicina" required></v-select>
      </v-flex>
      <v-flex md5 xs12 class="px-5" v-if="prikazi_ako_je_patika">
        <v-select v-model="select_velicina" :items="velicine_patike" label="Velicina" required></v-select>
      </v-flex>

      <v-flex md5 xs12 class="px-5">
        <v-select v-model="select_proizvodjac" :items="proizvodjaci" label="Proizvodjaci" required></v-select>
      </v-flex>
    </v-layout>-->

    <v-layout justify-center>
      <v-btn @click="submit" class="success">submit</v-btn>
      <v-btn @click="clear" class="ml-2">clear</v-btn>
    </v-layout>

    <!-- </v-container> -->

    <!-- <v-checkbox v-model="checkbox" value="1" label="Option" type="checkbox" required></v-checkbox> -->

    <!-- </form> -->
    <!-- </v-layout> -->

    <!-- </v-content> -->
  </v-content>
</template>

<script>
import Navbar from "../components/Navbar";
import db from "../fb";
import firebase from "firebase";
// import admin from 'firebase-admin'
export default {
  name: "WebShop",
  components: { Navbar },
  data() {
    return {
      model: "",
      kolicina: "",
      velicina: "",
      select: null,
      select_proizvodi: null,
      select_mod: null,
      select_velicina: null,
      select_model: [],
      select_proizvodjac: null,

      select_bojica: [],
      select_boja: null,

      proizvodi: [],
      velicine_majice: ["S", "XS", "M", "L", "XL", "XXL", "XXXL"],
      velicine_patike: ["38", "39", "40", "41", "42", "43", "44", "45", "48"],
      proizvodjaci: [],

      checkbox: null,

      dialog: false,
      new_product: "",
      new_product_model: null,
      new_proizvodjac: null,
      new_proizvodjac_boja: null,
      prikazi_za_sve_ostalo: false,
      prikazi_ako_je_patika: false,

      image_url: "",
      submit_button: false
    };
  },
  methods: {
    submit() {
      let velicina = this.select_velicina;
      let kolicina = this.kolicina;

      const avion = `model_velicina.${this.select_velicina}`;
      console.log(avion);

      // let obj = new Object();
      // let prop = `model_velicina.${this.select_velicina}`;
      // obj[prop] = this.kolicina;

      // console.log(obj); // {'haris': 'IME'}

      if (this.select_proizvodi != null || this.select_mod != null) {
        if (this.kolicina != null) {
          db.collection(this.select_proizvodi)
            .where("model", "==", this.select_mod)
            .get()
            .then(res => {
              res.forEach(element => {
                if (this.velicine_majice != "") {
                  db.collection(this.select_proizvodi)
                    .doc(element.id)
                    .update(
                      `model_velicina.${this.select_velicina}`,
                      this.kolicina /// AAAAAAA JEBEM TI MATER , ne treba da saljem kao objekat vec samo ovako , znaci nema {}
                    );
                }
                if (this.velicine_patike != "") {
                  db.collection(this.select_proizvodi)
                    .doc(element.id)
                    .update(
                      `model_velicina.${this.select_velicina}`,
                      this.kolicina
                    );
                }
              });
            });
        } else {
          console.log("Kolicina mora biti izabrana");
        }
      } else {
        console.log("Izaberi proizvod i model!");
      }
    },
    clear() {},
    onChangeProizvodi(event) {
      this.select_model = [];
      this.select_mod = [];
      this.select_bojica = [];
      this.select_boja = [];
      this.kolicina = "";
      this.proizvodjaci = [];
      this.velicina = [];
      // let proizvod = event.toLowerCase();
      let proizvod = event;
      db.collection(this.select_proizvodi)
        // .where("model", ">", "")
        .get()
        .then(res => {
          if (res.docs.length != 0) {
            res.docs.forEach(element => {
              this.select_model.push(element.data().model);
              if (this.select_proizvodi === "Patike") {
                this.prikazi_ako_je_patika = true;
                this.prikazi_za_sve_ostalo = false;
              } else {
                this.prikazi_za_sve_ostalo = true;
                this.prikazi_ako_je_patika = false;
              }

              if (typeof element.data().model_velicina.boja != "undefined") {
                this.select_bojica.push(element.data().model_velicina.boja);
              } else {
                this.select_bojica = [];
              }
            });
          }
        });
    },
    onChange(event) {
      console.log(event);
    },
    send_new_Proizvod() {
      var novi_niz = [];
      console.log(this.new_product);
      novi_niz.push(this.new_product);

      if (this.new_product == "Patike") {
        db.collection(this.new_product)
          .add({
            model: this.new_product_model,
            model_velicina: {
              "28": 0,
              "29": 0,
              "30": 0,
              "31": 0,
              "35": 0,
              "40": 0,
              "41": 0,
              "42": 0,
              "43": 0,
              "44": 0
            },
            proizvodjac: this.new_proizvodjac,
            slika: this.image_url
          })
          .then(res => {
            this.submit_button = false;
            console.log("Uspesan unos novog proizvodjaca...");

            db.collection("sve_kolekcije")
              .doc("kolekcije")
              .update({
                collections: firebase.firestore.FieldValue.arrayUnion(
                  this.new_product
                )
              })
              .then(res => {
                console.log("Do Jaja ....");

                console.log(novi_niz);

                this.new_product = "";
                this.new_product_model = "";
                this.new_proizvodjac = "";
                this.new_proizvodjac_boja = "";
                this.dialog = false;
              });
          });
      } else {
        db.collection(this.new_product)
          .add({
            model: this.new_product_model,
            model_velicina: {
              XS: 0,
              S: 0,
              M: 0,
              L: 0,
              XL: 0,
              XXL: 0,
              XXXL: 0
            },
            proizvodjac: this.new_proizvodjac,
            slika: this.image_url
          })
          .then(res => {
            this.submit_button = false;
            console.log("Uspesan unos novog proizvodjaca...");

            db.collection("sve_kolekcije")
              .doc("kolekcije")
              .update({
                collections: firebase.firestore.FieldValue.arrayUnion(
                  this.new_product
                )
              })
              .then(res => {
                console.log("Do Jaja ....");

                console.log(novi_niz);

                this.new_product = "";
                this.new_product_model = "";
                this.new_proizvodjac = "";
                this.new_proizvodjac_boja = "";
                this.dialog = false;
              });
          });
      }
    },
    fileUpload() {
      this.$refs.fileUpload.click();
    },
    onFilePicked(event) {
      if (event.target.files[0]) {
        console.log(event);
        let file = event.target.files[0];
        var storageRef = firebase
          .storage()
          .ref(this.new_product + Math.random() + file.name);
        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadUrlmage => {
              this.image_url = downloadUrlmage;
              this.submit_button = true;
              console.log(downloadUrlmage);
            });
          }
        );
      }
      console.log(event.target.files[0]);
    },
    onChangeModel(event) {
      this.proizvodjaci = [];
      this.kolicina = [];
      this.velicina = [];

      db.collection(this.select_proizvodi)
        .where("model", "==", this.select_mod)
        .get()
        .then(res => {
          res.forEach(element => {
            if (typeof element.data().proizvodjac != "undefined") {
              this.proizvodjaci.push(element.data().proizvodjac);
            } else {
              this.proizvodjaci = [];
            }
          });
        });
    }
  },
  mounted() {
    db.collection("sve_kolekcije")
      .doc("kolekcije")
      .get()
      .then(res => {
        // console.log(res.data().collections);
        res.data().collections.forEach(element => {
          this.proizvodi.push(element);
        });

        // this.proizvodi.push(res.data().collections)
      });

    //  db.getCollections().then(res =>{
    //     res.forEach(element => {
    //       console.log(element.data())
    //     });
    //   })
  }
};
</script>

<style>
</style>



