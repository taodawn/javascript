<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar flat>
          <v-btn icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>Albums</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-subheader>May</v-subheader>
        <v-container grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="n in 6" :key="n" sm4>
              <img
                :src="`https://randomuser.me/api/portraits/men/${n + 20}.jpg`"
                class="image"
                alt="lorem"
                width="100%"
              >
            </v-flex>
          </v-layout>
        </v-container>
        <v-subheader>June</v-subheader> 
        <v-container grid-list-sm>
            <v-layout row wrap>
                <v-flex v-for="n in 9" :key="n" sm4>
                    <img :src="`https://randomuser.me/api/portraits/women/${n+20}.jpg`" class="image" width="100%">
                </v-flex>   
            </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
