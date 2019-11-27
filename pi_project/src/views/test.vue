<template>
  <v-content>
    <Navbar />

    <!-- <v-row v-for="j in justify" :key="j" :justify="j">
      <v-col v-for="k in 2" :key="k" md="4">
        <v-card class="pa-2" outlined tile>One of two columns</v-card>
      </v-col>
    </v-row>-->

    <!-- <v-navigation-drawer app v-model="drawer" class="blue lighten-1" fixed>
      <v-list-item class="mb-4">
        <v-list-item-content class="text-center pt-5 title">
          <v-list-item-title>Raspberry Pi</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="item in data " :key="item.page" router:to="item.route" class="mt-2">
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title @click="navigate(`${item.route}`)">{{item.page}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>-->
    <!-- 
    <v-app-bar app class="blue lighten-1">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title">Gale</span>
      <span class="text--capitalize title"> Pi</span>

      <v-spacer></v-spacer>

      
      <span class="text--capitalize title"> Webshop</span>

      <v-spacer></v-spacer>

      <v-btn @click="signout" text class=" font-weight-bold subheading flat">
        <v-icon>exit_to_app</v-icon>
        <span class="ml-1" flat>Sign out</span>
      </v-btn>
    </v-app-bar>-->

    <!-- <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center"></v-col>
        </v-row>
      </v-container>
    </v-content>-->
  </v-content>
</template >

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      data: [
        { page: "Main", icon: "dashboard", route: "/main" },
        { page: "Setting", icon: "build", route: "/settings" },
        { page: "Prodavnica backoffice", icon: "work", route: "/prodavnica" },
        { page: "Vuex", icon: "accessibility_new", route: "/vuex" },
        { page: "Proizvodi", icon: "fastfood", route: "/proizvodi" },
        { page: "Prodavnica", icon: "add_shopping_cart", route: "/radnja" }
      ],
      justify: ["start", "center", "end", "space-around", "space-between"]
    };
  },
  methods: {
    openNavigation() {
      this.drawer != this.drawer;
    },
    signout() {
      this.$router.push("/");
    },
    navigate(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style>
</style>

