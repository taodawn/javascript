<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 d-flex>
        <v-card dark color="purple">
          <v-card-title primary-title>Lorem</v-card-title>
          <v-card-text>{{ lorem }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 d-flex>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card dark color="indigo">
              <v-card-text>{{ lorem.slice(0,70) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex v-for="n in 2" :key="n" d-flex xs12>
                <v-card color="red lighten-2" dark>
                  <v-card-text>{{ lorem.slice(0,40) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm6 md2 child-flex d-flex>
        <v-card dark color="green lighten-2">
          <v-card-text>{{ lorem.slice(0,90) }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 d-flex>
        <v-card dark color="blue lighten-2">
          <v-card-text>{{ lorem.slice(0,100) }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  })
};
</script>
