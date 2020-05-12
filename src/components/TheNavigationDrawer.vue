<template>
  <nav>
    <v-navigation-drawer
      class="background-color "
      v-model="drawer"
      absolute
      temporary
    >
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { bus } from "../main";

export default {
  data() {
    return {
      drawer: false,
    };
  },
  created() {
    bus.$on("drawer", (data) => {
      this.drawer = true;
    });
  },
};
</script>

<style scoped></style>
