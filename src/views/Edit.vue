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
             <v-btn class="ma-2" outlined color="white" >
                            <v-icon left>mdi-cart</v-icon><span>0 Cart </span>
                        </v-btn>
            <div class="text-center">
                <v-dialog  width="500px">
                   
                       
                   

                    <v-card height="300px">
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

            <v-btn class="ma-2" outlined color="white">
                <v-icon left>mdi-account</v-icon><span>Profile </span>
            </v-btn>
        </v-toolbar>
    </v-card>
    <v-img src="../assets/Frame.svg">
        <v-card class="mx-auto edit" max-width="1200" color="red lighten-5">
            <v-row>
                <v-col>
                    <v-card-text>
                        <v-list color="red lighten-4">
                            <v-list-item class="px-2">
                                <v-list-item-avatar>
                                    <v-img src="../assets/profile.jpg"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>

                            <v-list-item link>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6">
                                        Justin B Boss
                                    </v-list-item-title>
                                    <v-list-item-subtitle>Justinbboss@hotmail.com</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list nav dense color="red lighten-4">
                            <v-list-item link>
                                <v-list-item-icon>
                                    <v-icon>mdi-table-edit</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title @click="go">Edit My Shop</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-col>
                <v-list color="red lighten-5">
                    <h3 class="h3">Name :</h3>
                    <h3 class="h3">ID/Username :</h3>
                    <h3 class="h3">Address :</h3>
                    <h3 class="h3">ID card :</h3>
                    <h3 class="h32">Brithday :</h3>
                    <h3 class="h31">Gender :</h3>
                </v-list>
                <v-col>
                    <v-list color="red lighten-5">
                        <h3 class="text1">
                            <v-text-field v-model="message4" label="Justin B Boss" outlined clearable></v-text-field>
                        </h3>
                        <h3 class="text2">
                            <v-text-field v-model="message4" label="Bossy" outlined clearable></v-text-field>
                        </h3>
                        <h3 class="text3">
                            <v-text-field v-model="message4" label="Lamduan" outlined clearable></v-text-field>
                        </h3>
                        <h3 class="text4">
                            <v-text-field v-model="message4" label="12345678910" outlined clearable></v-text-field>
                        </h3>

                        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="date" label="Picker in menu" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu = false">
                                    Cancel
                                </v-btn>
                                <v-btn text color="primary" @click="$refs.menu.save(date)">
                                    OK
                                </v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-list>
                    <v-combobox class="combobox" outlined v-model="select" :items="items" label="Gender">

                    </v-combobox>
                </v-col>

                <v-col> </v-col>
            </v-row>
            <v-btn class="save" color="success"> Save Your Profile </v-btn>
        </v-card>
    </v-img>

    <v-footer dark padless>
        <v-card class="flex" flat tile>
            <v-card-title class="#FF8484">
                <strong class="subheading">
                    <p>
                        Hogcafe<br />Contect us <br />
                        6331305016@lamduan.mfu.ac.th <br />6331305022@lamduan.mfu.ac.th
                        <br />6331305038@lamduan.mfu.ac.th
                    </p>
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
.save {
    left: 490px;
    margin-bottom: 55px;
}

.text1 {
    margin-top: 25px;
}

.h31 {
    margin-top: 55px;
    margin-bottom: 55px;
}

.h32 {
    margin-top: 65px;
    margin-bottom: 55px;
}

.h3 {
    margin-top: 55px;
}

.edit {
    margin-top: 25px;
    margin-bottom: 25px;
}

.hog {
    width: 160px;
    height: 70px;
    margin-left: 40px;
}

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

.v-dialog {
    position: absolute;
    top: 41px;
}
</style>

<script>
export default {
    data: () => ({
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10),
        options: [{
            title: "Read the Docs",
            icon: "fa-book",
            url: "https://codeclimate.com/github/sagalbot/vue-select",
        }, ],
        menu: false,
        modal: false,
        menu2: false,
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
        dialog: false,
        select: ['Select Gender'],
        items: [
            'Male',
            'Female',
            'Not specified',
        ]
    }),
    methods: {
        go() {
            this.$router.push('/updatedata');
        }
    }
};
</script>
