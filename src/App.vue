<template>
  <v-app>
    <v-container class="text-color--text background-color">
      <TheNavbar />
      <v-content>
        <router-view> </router-view>
      </v-content>
      <v-footer app>
        Footer sitemap
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";

export default {
  name: "App",
  components: {
    TheNavbar
  },
};
</script>
