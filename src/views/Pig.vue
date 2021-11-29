<template>
<v-app id="inspire">
    <v-card>
        <v-toolbar color="#FF6752" dark flat>

            <v-toolbar-title>
                <v-img class="hog" src="../assets/aaa.png"></v-img>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn class="ma-2" outlined color="white" href="/Lobby">
                <v-icon left>mdi-home</v-icon><span>Home </span>
            </v-btn>
            <v-btn class="ma-2" outlined color="white" href="/Farm">
                <v-icon left>mdi-shovel</v-icon><span>Farm </span>
            </v-btn>
            <v-btn class="ma-2" outlined color="white" href="/Product">
                <v-icon left>mdi-hexagon</v-icon><span>Product </span>
            </v-btn>
            <v-btn class="ma-2" outlined color="white" href="/Pig">
                <v-icon left>mdi-pig</v-icon><span>Pig </span>
            </v-btn>
            <div class="text-center">
                <v-dialog v-model="dialog">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="ma-2" outlined color="white" v-bind="attrs" v-on="on">
                            <v-icon left>mdi-cart</v-icon><span>{{cart.length}} Cart </span>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title class="red accent-1"> Cart </v-card-title>

                        <v-card-text>
                            <v-layout wrap class="popup">
                                <v-flex lg3 md3 sm4 xs6 v-for="(cart, idx) in this.cart" :key="idx">
                                    <v-card max-width="400" class="ma-5">
                                        <v-img class="white--text align-end" height="200px" :src="cart.Picture">
                                            <v-card-title></v-card-title>
                                        </v-img>

                                        <v-card-subtitle class="pb-0">
                                            Product from pigs from farm
                                        </v-card-subtitle>

                                        <v-card-text class="text--primary">
                                            <div>ID = {{cart.id}}</div>
                                            <div>Price = {{cart.price}} Baht</div>
                                            <div>Weight = {{cart.weight}}</div>
                                            <div>Gender = {{cart.gender}}</div>
                                            
                                        </v-card-text>

                                        <v-card-actions>

                                            <v-btn color="orange" text @click="removecart(idx)">
                                                Remove
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-flex>
                            </v-layout>
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

            <v-btn class="ma-2" outlined color="white" href="/updatedata">
                <v-icon left>mdi-account</v-icon><span>Profile </span>
            </v-btn>
        </v-toolbar>
    </v-card>
    <v-img src="../assets/Frame.svg">
        <v-row no-gutters>

            <v-layout wrap>
                <v-flex lg3 md3 sm4 xs6 v-for="(Pig, idx) in this.HOME" :key="idx">
                    <v-card class="mx-auto" max-width="400">
                        <v-img class="white--text align-end" height="200px" :src="Pig.Picture">
                            <v-card-title></v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">
                            Pig from farm
                        </v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>ID = {{Pig.id}}</div>
                            <div>Price = {{Pig.price}} Baht</div>
                            <div>Weight = {{Pig.weight}} Kg.</div>
                            <div>Gender = {{Pig.gender}}</div>
                        </v-card-text>

                        <v-card-actions>

                            <v-btn color="orange" text @click="addcart(Pig)">
                                add to cart
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-row>
    </v-img>

    <v-footer dark padless>
        <v-card class="flex" flat tile>
            <v-card-title class="#FF8484">
                <strong class="subheading">
                    <p> Hogcafe<br>Contect us <br> 6331305016@lamduan.mfu.ac.th <br>6331305022@lamduan.mfu.ac.th <br>6331305038@lamduan.mfu.ac.th </p>
                </strong>

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
.popup {

    width: 1200px;
}

.mx-auto {
    margin-top: 30px;
}

.hog {
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
            HOME: [],
            search: "",
            cart: [],

        }
    },
    created() {

        this.initialize();
    },
    methods: {
        async initialize() {

            const axios = require('axios');

            axios.get('http://selab.mfu.ac.th:7416/api/Pig').then(resp => {

                console.log(resp.data.data);
                this.HOME = resp.data.data;

            });
        },

        async addcart(product) {

            this.cart.push(product);
            console.log(this.cart);

        },
        async removecart(product) {

            this.cart.splice(product, 1);
            console.log(product);

        },
    },
};
</script>
