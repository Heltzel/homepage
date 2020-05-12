<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="background-color"
      dark
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Marc Heltzel</v-list-item-title>
            <v-list-item-subtitle>Webdeveloper</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(tab, i) in tabs" :key="i" :to="tab.route" link>
            <v-list-item-title :to="{ name: tab.route }">{{
              tab.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { bus } from "../main";

export default {
  data() {
    return {
      drawer: false,
      tab: null,
      tabs: [
        { id: 1, name: "Home", route: "/" },
        { id: 2, name: "About", route: "About" },
        { id: 3, name: "Contact", route: "Contact" },
      ],
    };
  },
  methods: {
    test() {
      console.log("test");
    },
  },
  created() {
    bus.$on("drawer", (data) => {
      this.drawer = true;
    });
  },
};
</script>

<style scoped></style>
