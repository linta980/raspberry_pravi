<template>
  <v-content>
    <v-toolbar flat class="info">
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex xs12 md1 class>
          <v-btn flat v-on:click="login_enter">Login</v-btn>
        </v-flex>
        <v-flex xs12 md1 class>
          <v-btn flat v-on:click="register">Register</v-btn>
        </v-flex>
      </v-layout>
    </v-toolbar>

      <v-img src="https://picsum.photos/510/300?random" aspect-ratio="2.2"></v-img>

      
  </v-content>
</template>

<script>
import auth from "../fb";
import db from "../fb";
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
  mounted() {
    db.collection("users")
      .get()
      .then(res => {
        res.docs.forEach(element => {
          console.log(element.data());
        });
      });
  },
  methods: {
    login() {
      db.collection("users");
      //   const promise = auth.signInWithEmailANdPassword(this.email,this.password).then((res)=>{
      //       console.log(res)
      //   })
      this.$router.push("/navbar");
      this.seen = false;
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