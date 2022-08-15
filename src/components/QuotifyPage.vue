<template>
  <div class="flex justify-center items-center h-[100vh]">
    <div v-if="quote" class="w-[50vw] text-right children:(my-5) rounded-4xl bg-[#1f1d2e] p-16">
      <h1 v-text="quote.content" />
      <h2 v-text="quote.author" />
      <button ref="next" @click="fetchRandomQuote">Next quote</button>
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
      await this.fetchJSON("/random", null).then((response) => {
        this.quote = response;
      });
    },
  },
};
</script>
