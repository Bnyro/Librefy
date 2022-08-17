<template>
  <div class="flex-container">
    <div v-if="activity" class="surface text-right w-50">
      <h2 v-t="activity.activity" />
      <h3 v-t="activity.type" />
      <button class="btn" @click="fetchActivity" v-t="'actions.next_activity'" />
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
