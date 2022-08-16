<template>
  <div class="flex-container">
    <div class="surface flex flex-col justify-center">
      <div class="flex justify-center">
        <div class="areawrapper">
          <select class="select" v-model="inputLanguage">
            <option :value="'auto'">Auto</option>
            <option v-for="language in languages" :key="language.name" v-text="language.name" :value="language.code" />
          </select>
          <textarea class="textarea" ref="input" placeholder="Enter Text Here" v-model="inputText" />
        </div>
        <div class="areawrapper">
          <select class="select" v-model="resultLanguage">
            <option :value="'auto'">Auto</option>
            <option v-for="language in languages" :key="language.name" v-text="language.name" :value="language.code" />
          </select>
          <textarea class="textarea" ref="result" v-model="resultText" />
        </div>
      </div>
      <button class="btn" v-text="'Translate'" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseURL: "https://libretranslate.com",
      inputLanguage: "auto",
      resultLanguage: "auto",
      inputText: "",
      resultText: "",
      languages: null,
    };
  },
  mounted() {
    this.fetchLanguages();
  },
  methods: {
    async fetchLanguages() {
      await this.fetchJSON(this.baseURL + "/languages", null).then((response) => {
        this.languages = response;
      });
    },
    async translate() {
      this.fetchJSON(this.baseURL + "/translate", {
        method: "POST",
        body: JSON.stringify({
          q: "fdf",
          source: "auto",
          target: "es",
          format: "text",
          api_key: "",
        }),
        headers: { "Content-Type": "application/json" },
      });
    },
  },
};
</script>
