<template>
  <v-app id="inspire">
    <v-card>
      <v-toolbar color="deep-orange lighten-1" dark flat>
        <v-toolbar-title>Hog Cafe</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn class="ma-2" outlined color="white" href="/Lobby"> Home </v-btn>

        <v-btn class="ma-2" outlined color="white" href="/Farm"> Farm </v-btn>

        <v-btn class="ma-2" outlined color="white"> Product </v-btn>

        <v-btn class="ma-2" outlined color="white"> Pig </v-btn>

        <v-btn class="ma-2" outlined color="white"> Cart </v-btn>

        <v-btn class="ma-2" outlined color="white"> Profile </v-btn>
      </v-toolbar>
    </v-card>

    <v-img src="../assets/bg.png">
    <br>
     
     


     <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My Shop</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
           
        
             <v-btn
             color="#30C848" elevation="3"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
              
            >
              ADD
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="ID of item"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Price"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Age"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Gender"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Date"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
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
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

     
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
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Price', value: 'calories' },
        { text: 'Age', value: 'fat' },
        { text: 'Gender', value: 'carbs' },
        { text: 'Date', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.desserts = [
                  
          {
            name: '001',
            calories: 3750,
            fat: 2,
            carbs: 'male',
            protein: '6-11-2021',
          },
          {
            name: '002',
           calories: 3750,
            fat: 2,
            carbs: 'male',
            protein: '6-11-2021',
          },
          {
            name: '003',
           calories: 2990,
            fat: 2,
            carbs: 'female',
            protein: '6-11-2021',
          },
          {
            name: '004',
             calories: 2750,
            fat: 1,
            carbs: 'male',
            protein: '6-11-2021',
          },
          {
            name: '005',
            calories: 3950,
            fat: 3,
            carbs: 'female',
            protein: '6-11-2021',
          },
        ]
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>