<template>
  <div class="flex-container">
    <div class="surface">
      <h2 class="text-center">Services</h2>
      <div class="mt-10 grid grid-cols-3 children:my-4">
        <router-link to="/translate">
          <img src="/assets/translate.svg" />
          <h3 v-t="'titles.translator'" />
        </router-link>
        <router-link to="/quotes">
          <img src="/assets/quotes.svg" />
          <h3 v-t="'titles.quotes'" />
        </router-link>
        <router-link to="/bored">
          <img src="/assets/bored.svg" />
          <h3 v-t="'titles.bored'" />
        </router-link>
        <router-link to="/dict">
          <img src="/assets/dict.svg" />
          <h3 v-t="'titles.dict'" />
        </router-link>
        <router-link to="/user">
          <img src="/assets/user.svg" />
          <h3 v-t="'titles.random_user'" />
        </router-link>
        <router-link to="/countries">
          <img src="/assets/countries.svg" />
          <h3 v-t="'titles.countries'" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  @apply flex flex-col justify-center mx-5 items-center bg-[var(--highlight-low)] px-8 pt-6 rounded-2xl hover:bg-[var(--highlight)];
}
img {
  @apply w-20 h-20 invert brightness-70;
}
</style>
