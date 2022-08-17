<template>
    <div class="flex-container">
        <div class="surface">
            <input class="input mb-5" type="text" v-model="query" v-on:keyup.enter="fetchResults" :placeholder="$t('actions.search')"/>
            <div v-if="result">
                <details class="my-3" v-for="meaning in result" :key="meaning">
                    <summary class="hover:cursor-pointer" v-text="meaning.partOfSpeech" />
                    <div class="my-5" v-for="definition in meaning.definitions" :key="definition">
                        <div v-if="definition.definition" v-text="definition.definition" />
                        <span class="italic" v-if="definition.example" v-text="definition.example" />
                    </div>
                </details>
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
