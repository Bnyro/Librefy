<template>
  <div class="flex-container">
    <div class="surface">
      <h2 class="text-center">Services</h2>
      <div class="flex justify-center mt-20">
        <a href="/translate">
          <img src="/assets/translate.svg" />
          <h3 v-t="'titles.translator'" />
        </a>
        <a href="/quotes">
          <img src="/assets/quote.svg" />
          <h3 v-t="'titles.quotes'" />
        </a>
        <a href="/bored">
          <img src="/assets/bored.svg" />
          <h3 v-t="'titles.bored'" />
        </a>
        <a href="/ip">
          <img src="/assets/ip.svg" />
          <h3 v-t="'titles.ip_info'" />
        </a>
        <a href="/dict">
          <img src="/assets/dict.svg" />
          <h3 v-t="'titles.dict'" />
        </a>
        <a href="/user">
          <img src="/assets/user.svg" />
          <h3 v-t="'titles.random_user'" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  @apply flex flex-col justify-center mx-5 items-center bg-[var(--highlight-low)] px-8 pt-6 rounded-2xl hover:bg-[var(--highlight)];
}
img {
  @apply w-20 h-20;
  filter: invert() brightness(0.7);
}
</style>
