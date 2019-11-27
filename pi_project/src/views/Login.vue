<template>
  <v-content>
    <!-- <v-toolbar flat class="info"> -->

    <v-row flat class="info " >
      <v-spacer></v-spacer>
      <v-col cols="6" xl="1" lg="1" md="1" sm="1" xs="1"  >
        <v-btn text class="blue-grey lighten-4 mx-5" v-on:click="login_enter">Login</v-btn>
      </v-col>
      <v-col cols="6" xl="1" lg="1" md="1" sm="1" xs="1" >
        <v-btn  text class="blue-grey lighten-4 mx-5" v-on:click="register">Register</v-btn>
      </v-col>
    </v-row>

    <!-- <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex xs12 md1 class>
          <v-btn flat v-on:click="login_enter">Login</v-btn>
        </v-flex>
        <v-flex xs12 md1 class>
          <v-btn flat v-on:click="register">Register</v-btn>
        </v-flex>
    </v-layout>-->
    <!-- </v-toolbar> -->

    <v-container fluid fill-height>
      <v-layout align-top justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="person"
                  name="login"
                  label="Login"
                  type="text"
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" v-on:click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    drawer: null,
    email: "",
    password: "",
    seen: true
  }),
  props: {
    source: String
  },
  mounted() {},
  methods: {
    login() {
      if (this.email != "" && this.password != "") {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(res => {
            this.$router.push("/navbar");
            this.seen = false;
          })
          .catch(error => console.log(error.message));
      } else {
        console.log("Username or password must not be null");
      }
    },
    register() {
      this.$router.push("/register");
    },
    login_enter() {
      this.$router.push("/login");
    }
  }
};
</script>