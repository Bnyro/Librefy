<template>
  <div class="flex-container">
    <div v-if="quote" class="surface text-right w-50">
      <h2 v-text="quote.content" />
      <h3 class="mt-4" v-text="quote.author" />
      <button class="btn mt-6 mr-[-0.5em]" @click="fetchRandomQuote">Next quote</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: null,
    };
  },
  mounted() {
    this.fetchRandomQuote();
  },
  methods: {
    async fetchRandomQuote() {
      await this.fetchJSON(this.config.quotableURL + "/random", null).then((response) => {
        this.quote = response;
      });
    },
  },
};
</script>
