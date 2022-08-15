<template>
  <div class="mx-auto" v-if="quote">
    <h2 ref="quote" v-text="quote.content"></h2>
    <p ref="author" v-text="quote.author"></p>
    <button ref="next" @click="fetchRandomQuote" />
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
