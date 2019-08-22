
<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="grey--text title">Gale</span>
      <span class="text-capitalize grey--text title">Pi</span>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex md3 xs5 class="grey--text font-weight-bold py-3 title">
          <span>Pi Panel</span>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md2 xs6>
          <v-btn @click="signout" flat class="grey--text font-weight-bold subheading ">
            <v-icon>exit_to_app</v-icon>
            <span class="ml-1">Sign out</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-toolbar>

    <!-- @click="drawer=!drawer" -->
    <v-navigation-drawer app v-model="drawer" class="blue lighten-1" fixed>
      <v-list>
        <v-list-tile-title class="white--text title text-lg-center text-xs-center">Raspberry</v-list-tile-title>
      </v-list>
      <!-- <v-divider></v-divider> -->
      <v-list>
        <v-list-tile v-for="item in data" :key="item.page" router :to="item.route">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-action class>{{item.page}}</v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
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

      ]
    };
  },
  methods: {
    openNavigation() {
      this.drawer != this.drawer;
    },
    signout() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
