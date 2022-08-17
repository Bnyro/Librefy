<template>
  <div class="flex-container">
    <div v-if="activity" class="surface text-right w-50">
      <h1 v-text="activity.activity" />
      <h3 v-text="`${$t('info.type')}: ${activity.type}`" />
      <h3 class="leading-3" v-text="`${$t('info.participants')}: ${activity.participants}`" />
      <button class="btn mt-4" @click="fetchActivity" v-t="'actions.next_activity'" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activity: null,
    };
  },
  mounted() {
    this.fetchActivity();
  },
  methods: {
    async fetchActivity() {
      await this.fetchJSON(this.config.boredURL + "/activity").then((response) => {
        this.activity = response;
      });
    },
  },
};
</script>
