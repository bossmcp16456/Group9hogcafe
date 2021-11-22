
<template>
  <v-app id="inspire">
    <v-card>
    <v-toolbar color="#FF6752" dark flat>
        
        <v-toolbar-title> <v-img class="hog" src="../assets/aaa.png"></v-img> </v-toolbar-title>

        <v-spacer></v-spacer>

    <v-btn class="ma-2" outlined color="white" href="/Lobby"  > <v-icon left>mdi-home</v-icon><span>Home </span> </v-btn>
        <v-btn class="ma-2" outlined color="white" href="/Farm"> <v-icon left>mdi-shovel</v-icon><span>Farm </span> </v-btn>
        <v-btn class="ma-2" outlined color="white" href="/Product">    <v-icon left>mdi-hexagon</v-icon><span>Product </span> </v-btn>
        <v-btn class="ma-2" outlined color="white" href="/Pig"> <v-icon left>mdi-pig</v-icon><span>Pig </span> </v-btn>
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
                <v-icon left>mdi-cart</v-icon><span>Cart </span>
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

         <v-btn class="ma-2" outlined color="white" href="/updatedata"> <v-icon left>mdi-account</v-icon><span>Profile </span> </v-btn>
      </v-toolbar>
    </v-card>
    <v-img src="../assets/Frame.svg">
      <v-row no-gutters>
        <v-col>
          <v-card color="red lighten-5" class="mx-auto" max-width="300">
            <v-subheader>Filter</v-subheader>

            <v-list-item-group v-model="settings" multiple>
              <v-list-item>
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox
                      :input-value="active"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Local Farm</v-list-item-title>                    
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-list-item>
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox
                      :input-value="active"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Male</v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-list-item>
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox
                      :input-value="active"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Female</v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-list-item>
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox
                      :input-value="active"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Most Rated</v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-card>
        </v-col>

        <v-col>
          <v-card color="red lighten-5" class="mx-auto" max-width="320">
            <v-img
              class="black--text align-end"
              height="175px"
              src="../assets/pig1.png"
            >
            </v-img>
            <v-card-title>Pigs form local farm in Chiang rai</v-card-title>
            <v-card-subtitle class="pb-0"> $ 3250 Baht</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Age : 1 year</div>

              <div>15 kg. Gender : male</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Chat </v-btn>

              <v-btn color="orange" text> Add to Cart </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col order="12">
          <v-card color="red lighten-5" class="mx-auto" max-width="320">
            <v-img
              class="black--text align-end"
              height="175px"
              src="../assets/pig2.png"
            >
            </v-img>
            <v-card-title>Pigs form local farm in Chiang rai</v-card-title>
            <v-card-subtitle class="pb-0"> $ 3250 Baht</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Age : 1 year</div>

              <div>15 kg. Gender : male</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Chat </v-btn>

              <v-btn color="orange" text> Add to Cart </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col order="1">
          <v-card color="red lighten-5" class="mx-auto" max-width="320">
            <v-img
              class="black--text align-end"
              height="175px"
              src="../assets/pig3.png"
            >
            </v-img>
            <v-card-title>Pigs form local farm in Chiang rai</v-card-title>
            <v-card-subtitle class="pb-0"> $ 3250 Baht</v-card-subtitle>

            <v-card-text color="red lighten-5" class="text--primary">
              <div>Age : 1 year</div>

              <div>15 kg. Gender : male</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Chat </v-btn>

              <v-btn color="orange" text> Add to Cart </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col> </v-col>
        <v-col>
          <v-card color="red lighten-5" class="mx-auto" max-width="320">
            <v-img
              class="black--text align-end"
              height="175px"
              src="../assets/pig1.png"
            >
            </v-img>
            <v-card-title>Pigs form local farm in Chiang rai</v-card-title>
            <v-card-subtitle class="pb-0"> $ 3250 Baht</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Age : 1 year</div>

              <div>15 kg. Gender : male</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Chat </v-btn>

              <v-btn color="orange" text> Add to Cart </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col order="12">
          <v-card color="red lighten-5" class="mx-auto" max-width="320">
            <v-img
              class="black--text align-end"
              height="175px"
              src="../assets/pig2.png"
            >
            </v-img>
            <v-card-title>Pigs form local farm in Chiang rai</v-card-title>
            <v-card-subtitle class="pb-0"> $ 3250 Baht</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Age : 1 year</div>

              <div>15 kg. Gender : male</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Chat </v-btn>

              <v-btn color="orange" text> Add to Cart </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col order="1">
          <v-card color="red lighten-5" class="mx-auto" max-width="320">
            <v-img
              class="black--text align-end"
              height="175px"
              src="../assets/pig3.png"
            >
            </v-img>
            <v-card-title>Pigs form local farm in Chiang rai</v-card-title>
            <v-card-subtitle class="pb-0"> $ 3250 Baht</v-card-subtitle>

            <v-card-text color="red lighten-5" class="text--primary">
              <div>Age : 1 year</div>

              <div>15 kg. Gender : male</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Chat </v-btn>

              <v-btn color="orange" text> Add to Cart </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-img>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="#FF8484">
          <strong class="subheading" > <p>  Hogcafe<br>Contect us <br> 6331305016@lamduan.mfu.ac.th <br>6331305022@lamduan.mfu.ac.th <br>6331305038@lamduan.mfu.ac.th </p></strong>

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
.mx-auto {
  margin-top: 30px;
}
.hog{
  width: 160px;
  height: 70px;
  margin-left: 40px;
}
</style>


<script>
export default {
  data() {
    return {
       icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      dialog: false,
    };
  },
};
</script>






