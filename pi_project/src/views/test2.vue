
<nav>
    <v-toolbar text >
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


    <div>
    <p>
    <strong>
    <a href="https://github.com/MichMich/MagicMirror" title="How to make Magic mirror in your home">Magic Mirror for your home</a> 
    </strong>This is one awessooome Header text that exlains how to make magic mirror in your home
    </p>
    </div>



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


{"PortalRecipeCard":"",
"LoungersRecipeCard":"#e2f4fd",
"LandscapeRecipeCard":"#e2f4fd",
"LandscapeCookBook":"#e2f4fd",
"CookBookDrinksA4":"#e2f4fd",
"CookBookFoodA4":"#e2f4fd",
"CookBookDrinksA5":"#e2f4fd",
"SaBrainCookBook":"#e0cfd0",
"KitchenTrainingPack":"#e0cfd0",
"CookBookFoodA4TrgBlue":"#bbd1e5",
"CookBookFoodA4TrgPink":"#f6b9c2",
"CookBookFoodA4TrgGreen":"#bce5e7",
"CookBookTrainingPackA4Fullers":"#e2f4fd"}