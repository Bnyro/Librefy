<template>
  <div class="flex-container">
    <div v-if="infos" class="surface w-50 grid grid-cols-2 text-center">
      <p v-for="info in infos" v-text="info" />
    </div>
    <div v-else>Nothing found</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: null,
    };
  },
  mounted() {
    this.fetchIPInfo();
  },
  methods: {
    async fetchIPInfo() {
      await this.fetchJSON(this.config.ipInfoURL + "/json").then((response) => {
        this.infos = [];
        Object.keys(response).forEach((key, index) => {
          this.infos.push(key + ": " + response[key]);
        });
      });
    },
  },
};
</script>
