<template>
  <div class="flex-container">
    <div v-if="user" class="surface text-center w-50">
      <img class="rounded-full" :src="user.picture.large" />
      <h2 class="mt-4 mb-[-0.2em]" v-text="user.fullName" />
      <p v-t="`${$t('info.age')}: ${user.dob.age}`" />
      <p class="my-[-0.5em]" v-t="`${$t('info.nationality')}: ${user.nat}`" />
      <p v-t="`${$t('info.email')}: ${user.email}`"/>
      <button class="btn mt-6 mr-[-0.5em]" @click="fetchRandomUser" v-t="'actions.new_user'" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.fetchRandomUser();
  },
  methods: {
    async fetchRandomUser() {
      await this.fetchJSON(this.config.randomUserURL + "/api", null).then((response) => {
        this.user = response.results[0];
        this.user.fullName = this.user.name.first + " " + this.user.name.last
      });
    },
  },
};
</script>
