<template>
    <div class="flex-container">
        <div class="surface">
            <div class="text-center w-full">
            <input class="input mb-5" type="text" v-model="query" v-on:keyup.enter="fetchResults" :placeholder="$t('actions.search')"/>
            </div>
            <div v-if="result">
                <div class="my-3" v-for="meaning in result" :key="meaning">
                    <h3 v-text="meaning.partOfSpeech" />
                    <details v-if="meaning.definitions">
                        <summary class="summary" v-t="'info.definitions'" />
                        <ul>
                            <li class="my-5" v-for="definition in meaning.definitions" :key="definition">
                                <div v-if="definition.definition" v-text="definition.definition" />
                                <span class="italic" v-if="definition.example" v-t="`${$t('info.example')}: ${definition.example}`" />
                            </li>
                        </ul>
                    </details>
                    <details v-if="meaning.synonyms.length">
                        <summary class="summary"  v-t="'info.synonyms'" />
                        <ul>
                            <li class="my-5" v-for="synonym in meaning.synonyms" :key="synonym" v-text="synonym" />
                        </ul>
                    </details>
                    <details v-if="meaning.antonyms.length">
                        <summary class="summary"  v-t="'info.antonyms'" />
                        <ul>
                            <li class="my-5" v-for="antonym in meaning.antonyms" :key="antonym" v-text="antonym" />
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            query: "",
            result: null,
        }
    },
    methods: {
        async fetchResults() {
            if (this.query == "") return;
            this.fetchJSON(this.config.dictionaryURL + "/api/v2/entries/en/" + this.query, null).then((response) => {
                this.result = response[0].meanings;
            })
        }
    }
}
</script>
