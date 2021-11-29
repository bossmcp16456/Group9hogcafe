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
            <v-btn class="ma-2" outlined color="white">
                <v-icon left>mdi-cart</v-icon><span>0 Cart </span>
            </v-btn>
            <div class="text-center">

            </div>

            <v-btn class="ma-2" outlined color="white" href="/Edit">
                <v-icon left>mdi-account</v-icon><span>Profile </span>
            </v-btn>
        </v-toolbar>
    </v-card>
    <v-img src="../assets/Frame.svg">

        <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Product From Pig</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                New Item
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>

                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.mfg" label="MFG"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.exp" label="EXP"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.Picture" label="Picture(URL)"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">

                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>



        <br>

        <v-data-table :headers="headers1" :items="pig" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Pig</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog1" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                New Item
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>

                                       

                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem1.price" label="Price"></v-text-field>
                                        </v-col> <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem1.age" label="Age"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem1.weight" label="Weight"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem1.gender" label="Gender"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem1.Picture" label="Picture(URL)"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">

                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close1">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="savepig">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete1" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete1">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm1">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem1(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem1(item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize1">
                    Reset
                </v-btn>
            </template>
        </v-data-table>
  
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
#inspire {
    height: 100vh;
}

.hog {
    width: 160px;
    height: 70px;
    margin-left: 40px;
}
</style>

<script>
export default {
    data: () => ({
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
        dialog: false,
        dialogDelete: false,
        dialog1: false,
        dialogDelete1: false,

        headers: [{
                text: 'ID of Product',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            {
                text: 'Name',
                value: 'name'
            },{
                text: 'Price',
                value: 'price'
            },
            {
                text: 'MFG',
                value: 'mfg'
            },
            {
                text: 'EXP',
                value: 'exp'
            },
            {
                text: 'Picture',
                value: 'Picture'
            },
            {
                text: 'Actions',
                value: 'actions',
                sortable: false
            },
        ],
        headers1: [{
                text: 'ID of Pig',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            {
                text: 'Price',
                value: 'price'
            },
            {
                text: 'Age',
                value: 'age'
            },
            {
                text: 'Weight',
                value: 'weight'
            },
            {
                text: 'Gender',
                value: 'gender'
            },
            {
                text: 'Picture',
                value: 'Picture'
            },
            {
                text: 'Actions',
                value: 'actions',
                sortable: false
            },
        ],
        desserts: [],
        pig: [],
        editedIndex: -1,
        editedItem: {
            price: '',
            name: '',
            mfg: '',
            exp: '',
            Picture: '',
        },
        editedItem1: {
            price: '',
            age: '',
            weight: '',
            gender: '',
            Picture: '',
        },
        defaultItem1: {
            price: '',
            age: '',
            weight: '',
            gender: '',
            Picture: '',
        },
        defaultItem: {
            price: '',
            name: '',
            mfg: '',
            exp: '',
            Picture: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
           this.initialize1()

    },

    methods: {
        initialize() {
            const axios = require('axios');

            axios.get('http://selab.mfu.ac.th:7416/api/ProductFromPig').then(resp => {

                console.log(resp.data.data);
                this.desserts = resp.data.data;

            });
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        async deleteItemConfirm() {
            const axios = require("axios");
            this.desserts.splice(this.editedIndex, 1)
            const res = await axios.delete(
                "http://selab.mfu.ac.th:7416/api/deleteProductFromPig/" + this.editedItem.id
            );
            console.log(res)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        initialize1() {
            const axios = require('axios');

            axios.get('http://selab.mfu.ac.th:7416/api/Pig').then(resp => {

                console.log(resp.data.data);
                this.pig = resp.data.data;

            });
        },

        editItem1(item) {
            this.editedIndex = this.pig.indexOf(item)
            this.editedItem1 = Object.assign({}, item)
            this.dialog1 = true
        },

        deleteItem1(item) {
            this.editedIndex = this.pig.indexOf(item)
            this.editedItem1 = Object.assign({}, item)
            this.dialogDelete1 = true
        },

        async deleteItemConfirm1() {
            const axios = require("axios");
            this.pig.splice(this.editedItem1, 1)
            const res = await axios.delete(
                "http://selab.mfu.ac.th:7416/api/deletePig/" + this.editedItem1.id
            );
            console.log(res)
            this.closeDelete1()
        },

        close1() {
            this.dialog1 = false
            this.$nextTick(() => {
                this.editedItem1 = Object.assign({}, this.defaultItem1)
                this.editedIndex = -1
            })
        },

        closeDelete1() {
            this.dialogDelete1 = false
            this.$nextTick(() => {
                this.editedItem1 = Object.assign({}, this.defaultItem1)
                this.editedIndex = -1
            })
        },

        async save() {
            const axios = require("axios");
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem);

                const res = axios.put(
                    "http://selab.mfu.ac.th:7416/api/ProductFromPig/" + this.editedItem.id,
                    this.editedItem
                );
                console.log(this.editedItem);
                console.log(res);
                this.initialize();
            } else {
                this.desserts.push(this.editedItem);

                let res = await axios.post(
                    "http://selab.mfu.ac.th:7416/api/AddProductFromPig",
                    this.editedItem
                );
                console.log(this.editedItem);
                console.log(res);
                this.initialize();
            }
            this.close();
        },
        async savepig() {
            const axios = require("axios");
            if (this.editedIndex > -1) {
                Object.assign(this.pig[this.editedIndex], this.editedItem1);

                const res = axios.put(
                    "http://selab.mfu.ac.th:7416/api/Pig/" + this.editedItem1.id,
                    this.editedItem1
                );
                console.log(this.editedItem1);
                console.log(res);
                this.initialize1();
            } else {
                this.desserts.push(this.editedItem1);

                let res = await axios.post(
                    "http://selab.mfu.ac.th:7416/api/AddPig",
                    this.editedItem1
                );
                console.log(this.editedItem1);
                console.log(res);
                this.initialize1();
            }
            this.close1();
        },
    },
}
</script>
