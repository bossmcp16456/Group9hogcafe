<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login in to Your Account</h4>
                    <h6 class="text-center grey--text">
                      Log in to your account so you can continue builiding
                      <br />and editing your onboarding flows
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                          v-model="loginc.email"
                        />
                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                          v-model="loginc.password"
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Remember Me"
                              class="mt-n1"
                              color="blue"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption orange--text"
                              >Forgot password</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn
                          color="deep-orange lighten-1"
                          dark
                          block
                          tile
                          @click="ok()"
                          >Log in</v-btn
                        >

                        <h5 class="text-center grey--text mt-4 mb-3">
                          Or Log in using
                        </h5>
                        <div
                          class="
                            d-flex
                            justify-space-between
                            align-center
                            mx-10
                            mb-16
                          "
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3"
                              >fab fa-twitter</v-icon
                            >
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="deep-orange lighten-1 rounded-bl-xl"
                >
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Don't Have an Account Yet?</h3>
                      <h6 class="text-center">
                        Let's get you all set up so you can start creating your
                        your first<br />
                        onboarding experience
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  class="deep-orange lighten-1 rounded-br-xl"
                >
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Alredy Signed up?</h3>
                      <h6 class="text-center">
                        Log in to your account so you can continue building
                        and<br />
                        editing your onboarding flows
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Sign Up for an Account</h4>
                    <h6 class="text-center grey--text">
                      Let's get you all set up so you can start creatin your
                      <br />
                      first onboarding experiance
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              v-model="editedItem.name"
                              label="Name"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                            />

                            <v-text-field
                              v-model="editedItem.password"
                              label="Password"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              type="password"
                            />
                          </v-col>
                        </v-row>
                        <v-text-field
                          v-model="editedItem.address"
                          label="Address"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        />
                        <v-text-field
                          v-model="editedItem.email"
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        />
                        <v-text-field
                          v-model="editedItem.telephone"
                          label="Telephone"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        />
                        <v-text-field
                          v-model="editedItem.card_id"
                          label="ID CARD"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="I Accept AAE"
                              class="mt-n1"
                              color="blue"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption orange--text ml-n4"
                              >Terms &Conditions</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn
                          color="deep-orange lighten-1"
                          dark
                          block
                          tile
                          @click="save"
                          >Sign up</v-btn
                        >

                        <h5 class="text-center grey--text mt-4 mb-3">
                          Or Sign up using
                        </h5>
                        <div
                          class="
                            d-flex
                            justify-space-between
                            align-center
                            mx-10
                            mb-11
                          "
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3"
                              >fab fa-twitter</v-icon
                            >
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    // name: "",
    // password: "",
    // email: "",
    // address: "",
    // telephone: "",
    // cardid: "",
    step: 1,
    editedItem: {
      name: "",
      password: "",
      email: "",
      address: "",
      telephone: "",
      card_id: "",
    },
    loginc: {
      email: "",
      password: "",
    },
    data1() {
      return {
        loginc: {
          email: "",
          password: "",
        },
      };
    },
  }),

  methods: {
    async save() {
      const axios = require("axios");

      //let payload = { name: 'John Doe', occupation: 'gardener' };

      let res = await axios.post(
        "http://selab.mfu.ac.th:7416/api/Customeradd",
        this.editedItem
      );

      let data = res.data;
      console.log(data);
      console.log(this.editedItem);
      alert("Register successful");
      this.reset();
    },
    reset() {
      this.editedItem.name = "";
      this.editedItem.password = "";
      this.editedItem.address = "";
      this.editedItem.card_id = "";
      this.editedItem.telephone = "";
      this.editedItem.email = "";
    },

    ok() {
      const axios = require("axios");
      if (this.loginc.email != "" && this.loginc.password != "") {
        axios
          .get("http://selab.mfu.ac.th:7416/api/Customer/", {
            params: {
              user: this.loginc.email,
              pass: this.loginc.password,
            },
           
          })
          .then((data1) => {
            if (data1.data1.response.length == 0) {
              alert("Username or password wrong ");
            } else {
              var user = JSON.stringify(data1.data1.response);
              console.log(user);
              window.sessionStorage.setItem("user", user);
              this.$router.push({
                path: "/Lobby",
              });
            }
          })
          .catch((error) => {
            alert(error);
          });
      } else {
        alert("Please fill out the information correctly.");
      }
    },
  },
  props: {
    source: String,
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
