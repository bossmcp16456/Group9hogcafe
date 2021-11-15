
<template>
  <v-app id="inspire">
    <v-card>
      <v-toolbar color="deep-orange lighten-1" dark flat>
        <v-toolbar-title>Hog Cafe</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn class="ma-2" outlined color="white" href="/Lobby"> Home </v-btn>

        <v-btn class="ma-2" outlined color="white" href="/Farm"> Farm </v-btn>

        <v-btn class="ma-2" outlined color="white" href="/Product">
          Product
        </v-btn>

        <v-btn class="ma-2" outlined color="white" href="/Pig"> Pig </v-btn>

        <div class="text-center">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="ma-2"
                outlined
                color="white"
                v-bind="attrs"
                v-on="on"
              >
                Cart
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="red accent-1"> Cart </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <v-btn class="ma-2" outlined color="white"> Profile </v-btn>
      </v-toolbar>
    </v-card>
    <v-img src="../assets/bg.png">
      <h1 class="wel">Welcome to GTB Farm <br />Chiang Rai.</h1>
      <h2 class="jon">
        Join the farm to make a difference for your<br />
        life and the environment.
      </h2>
      <v-btn class="button white--text" depressed color="#FF8A80">
        Go to Stone
      </v-btn>
      <v-btn class="button white--text" depressed color="#FF8A80">
        Learn more
      </v-btn>
      <v-img class="pig" src="../assets/pig.png"></v-img>
    </v-img>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="red lighten-3">
          <strong class="subheading"
            >Developer 6331305016 6331305022 6331305038</strong
          >

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Group9 Hog Cafe Website</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style>
.wel {
  margin-top: 50px;
  margin-left: 30px;
  font-style: italic;
  font-weight: bold;
  font-size: 50px;
  color: white;
}
.jon {
  margin-top: 30px;
  margin-left: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: #858585;
}
.button {
  margin-left: 40px;
  margin-top: 30px;
  width: 300px;
  height: 50px;
}
.pig {
  position: absolute;
  width: 515px;
  height: 313px;
  left: 951px;
  top: 100px;
  filter: drop-shadow(10px 10px 4px #d81b60);
}
#inspire {
  height: 100vh;
}
</style>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
