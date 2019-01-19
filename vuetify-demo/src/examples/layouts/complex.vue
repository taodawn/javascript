<template>
  <v-app>
    <v-toolbar color="blue-grey" app clipped-right fixed dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app fixed>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Open Temporary Drawer</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="drawerRight" app right clipped fixed>
        <v-list dense>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>exit_to_app</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    Open Temporary Drawer
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawerRight: null,
    drawer: null
  })
};
</script>
