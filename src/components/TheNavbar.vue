<template>
  <nav>
    <v-toolbar color="background-color" dark flat class=" d-sm-flex d-md-none">
      <v-app-bar-nav-icon
        text-color--text
        @click="drawer"
        class=" text-color--text"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Menu</v-toolbar-title>
    </v-toolbar>
    <v-toolbar color="background-color" dark flat class="d-none d-md-block">
      <v-tabs
        v-model="tab"
        background-color="background-color"
        color="text-color"
        right
      >
        <v-tab
          v-for="tab in tabs"
          :key="tab.id"
          class="text-color--text"
          :to="{ name: tab.route }"
        >
          {{ tab.name }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <TheNavigationDrawer app />
  </nav>
</template>

<script>
import { bus } from "../main";
import TheNavigationDrawer from "@/components/TheNavigationDrawer";

export default {
  components: {
    TheNavigationDrawer,
  },
  data() {
    return {
      tab: null,
      tabs: [
        { id: 1, name: "Home", route: "Home" },
        { id: 2, name: "About", route: "About" },
        { id: 3, name: "Contact", route: "Contact" },
      ],
    };
  },
  methods: {
    drawer() {
      bus.$emit("drawer", true);
    },
  },
};
</script>

<style></style>
