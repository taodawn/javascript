<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Grid1/>
      <playground/>
      <offset/>
      <order/>
      <directionAndAlign/>
      <rowColumnBreakpoint/>
      <growShrink/>
      <nestedGrid/>
      <uniqueLayouts/>
      <spacer/>
      <tags/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Grid1 from "./components/Grid1";
import playground from "./examples/grid/playground";
import offset from "./examples/grid/offset";
import order  from "./examples/grid/order"
import directionAndAlign from "./examples/grid/directionAndAlign"
import rowColumnBreakpoint from "./examples/grid/rowColumnBreakpoint"
import growShrink from "./examples/grid/growShrink"
import nestedGrid from "./examples/grid/nestedGrid"
import uniqueLayouts from "./examples/grid/uniqueLayouts"
import spacer from "./examples/grid/spacer"
import tags from "./examples/grid/tags"

export default {
  name: "App",
  components: {
    HelloWorld,
    Grid1,
    playground,
    offset,
    order,
    directionAndAlign,
    rowColumnBreakpoint,
    nestedGrid,
    uniqueLayouts,
    spacer,
    tags,
    growShrink
  },
  data() {
    return {
      //
    };
  }
};
</script>
