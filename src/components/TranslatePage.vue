<template>
  <div class="flex-container">
    <div class="surface flex flex-col justify-center items-center">
      <div class="flex justify-center">
        <div class="areawrapper">
          <select class="select" v-model="inputLanguage" @change="translate">
            <option :value="'auto'">Auto</option>
            <option v-for="language in languages" :key="language.name" v-text="language.name" :value="language.code" />
          </select>
          <textarea class="textarea" ref="input" placeholder="Enter Text Here" v-model="inputText" spellcheck="false" v-on:keyup.enter="translate" />
        </div>
        <div class="areawrapper">
          <select class="select" v-model="resultLanguage" @change="translate">
            <option v-for="language in languages" :key="language.name" v-text="language.name" :value="language.code" />
          </select>
          <textarea class="textarea" ref="result" v-model="resultText" spellcheck="false" readonly />
        </div>
      </div>
      <button class="btn mt-4" v-text="'Translate'" @click="translate" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputLanguage: "auto",
      resultLanguage: "en",
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
      await this.fetchJSON(this.config.libreTranslateURL + "/languages", null).then((response) => {
        this.languages = response;
      });
    },
    async translate() {
      if (this.inputText == "") return;
      this.fetchJSON(this.config.libreTranslateURL + "/translate", {
        method: "POST",
        body: JSON.stringify({
          q: this.inputText,
          source: this.inputLanguage,
          target: this.resultLanguage,
          format: "text",
        }),
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        this.resultText = response.translatedText;
      });
    },
  },
};
</script>
