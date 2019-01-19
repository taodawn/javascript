<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark>
                <v-toolbar-title>Login Form</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-tooltip left>
                  <v-btn icon large slot="activator" target="_blank" :href="source">
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <v-btn icon large slot="activator" target="_blank" href="https://codepen.io/johnjleider/pen/wyYVVj">
                    <v-icon large>settings_backup_restore</v-icon>
                  </v-btn>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <v-text-field
                    name="login"
                    label="Login"
                    id="login"
                    type="text"
                    prepend-icon="person"
                  ></v-text-field>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    prepend-icon="lock"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>
