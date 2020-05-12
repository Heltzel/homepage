<template>
  <nav>
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
  </nav>
</template>

<script>
export default {
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
};
</script>

<style></style>
