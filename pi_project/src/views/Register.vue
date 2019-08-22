<template>
  <v-content>
    <v-toolbar flat class="info">
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex xs12 md1 class>
          <v-btn flat v-on:click="login_enter">Login</v-btn>
        </v-flex>
        <v-flex xs12 md1 class>
          <v-btn flat>Register</v-btn>
        </v-flex>
      </v-layout>
    </v-toolbar>

    <v-container fluid fill-height>
      <v-layout align-top justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Register form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <div class="mb-3">
                <v-alert :value="alert_success" type="success">{{success}}</v-alert>

                <!-- <v-alert :value="false" type="info">This is a info alert.</v-alert>

                <v-alert :value="false" type="warning">This is a warning alert.</v-alert> -->

                <v-alert :value="alert_fail" type="error">{{fail}}</v-alert>
              </div>

              <v-form>
                <v-text-field
                  prepend-icon="person"
                  name="login"
                  label="Username"
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
                <v-text-field
                  id="password_confirm"
                  prepend-icon="lock"
                  name="password_confirm"
                  label="Confirm Password"
                  type="password"
                  v-model="password_confirm"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" v-on:click="register">Register</v-btn>
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
  data() {
    return {
      email: "",
      password: "",
      password_confirm: "",
      alert_success:false,
      alert_fail:false,
      success:'',
      fail:''

    };
  },

  methods: {
    login_enter() {
      this.$router.push("/login");
    },
    register() {
      if (this.password === this.password_confirm) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            // alert("Novi User registrovan sa email-om:");
            this.alert_success =true;
            this.alert_fail=false
            this.success ="Uspesno ste se registrovali"
            this.$router.push("/login");
          })
          .catch(error => {
            // alert("Kurac buraz , evo zasto : "`${error.message}`);
            console.log(error.message);
            this.fail= error.message
            this.alert_fail=true
            this.alert_success=false
          });
      }
    }
  }
};
</script>

<style>
</style>
