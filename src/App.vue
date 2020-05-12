<template>
  <v-app>
    <v-content>
      <v-container class="text-color--text background-color">
        <TheNavbar />
        <router-view> </router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";

export default {
  name: "App",
  components: {
    TheNavbar,
  },
};
</script>
