
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
      <v-card
        :loading="loading"
        class="rounded-xl mx-auto my-12"
        max-width="1300"
        color="red lighten-4"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" src="../assets/farm.png"></v-img>

        <v-card-title>Athinan Farm</v-card-title>

        <v-card-text>
          <div class="font-weight-black">Branch : MFU Hog</div>

          <div class="font-weight-black">
            GTB farm Chiang Rai is a pig farm, pig breeding, fattening pigs with
            more than 200,000 pigs in the system. We currently have 1 pig farm
            in Chiang Rai. And there are more than 5,000 sows and more than
            200,000 pigs in a closed farm area of 1,500 rai.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Browse products from the farm</v-card-title>

        <v-card-text>
          <v-btn rounded color="red lighten-3" dark> Go to Stone </v-btn>
        </v-card-text>

        <v-card-actions> </v-card-actions>
      </v-card>
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
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>


