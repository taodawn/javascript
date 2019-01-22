<template>
  <v-app id="keep">
    <v-navigation-drawer app clipped v-model="drawer" class="grey lighten-4" fixed>
      <v-list dense class="grey lighten-4">
        <template v-for="item in items">
          <v-layout v-if="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader>{{item.heading}}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider v-else-if="item.divider" dark class="my-3"></v-divider>
          <v-list-tile v-else @click>
            <v-list-tile-action>
              <v-icon>{{ item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">{{item.text}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="amber" clipped-left app absolute>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Google&nbsp;<span class="font-weight-light">Keep</span></span>
      <v-text-field prepend-inner-icon="search" label="Search" flat hide-details solo-inverted></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip left>
              <v-btn icon large slot="activator" :href="source" target="_blank">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn
                icon
                large
                slot="activator"
                href="https://codepen.io/johnjleider/pen/jZQNbd"
                target="_blank"
              >
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: "lightbulb_outline", text: "Notes" },
      { icon: "touch_app", text: "Reminders" },
      { divider: true },
      { heading: "Labels" },
      { icon: "add", text: "Create new label" },
      { divider: true },
      { icon: "archive", text: "Archive" },
      { icon: "delete", text: "Trash" },
      { divider: true },
      { icon: "settings", text: "Settings" },
      { icon: "chat_bubble", text: "Trash" },
      { icon: "help", text: "Help" },
      { icon: "phonelink", text: "App downloads" },
      { icon: "keyboard", text: "Keyboard shortcuts" }
    ]
  }),
  props: {
    source: String
  }
};
</script>
<style lang="stylus">
#keep {
  .v-navigation-drawer__border {
    display: none;
  }
}
</style>