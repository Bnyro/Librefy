<template>
    <div class="flex-container">
        <div class="surface text-center">
            <div v-if="country">
                <img class="h-30" :src="country.flag"/>
                <h2 class="mt-10" v-text="country.name" />
                <p v-if="country.capital" v-text="`${$t('info.capital')}: ${country.capital}`" />
                <p v-if="country.subregion || country.region" v-text="`${$t('info.region')}: ${country.subregion ?? country.region}`" />
                <p v-text="`${$t('info.inhabitants')}: ${formatNumber(country.population)}`" />
            </div>
            <button class="btn mt-4" @click="randomCountry" v-t="'actions.next_country'"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countries: null,
            country: null,
        }
    },
    mounted() {
        this.randomCountry();
    },
    methods: {
        async randomCountry() {
            if (!this.countries) {
                await this.fetchJSON(this.config.countriesURL + "/v2/all", null).then((response) => {
                    this.countries = response;
                });
            }
            const index = this.getRandomInt(0, this.countries.length);
            this.country = this.countries[index];
        },
    },
}
</script>
