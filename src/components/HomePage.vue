<template>
  <div class="flex-container">
    <div class="surface">
      <h2 class="text-center">Services</h2>
      <div class="flex justify-center mt-20">
        <a href="/translate">
          <img src="/assets/translate.svg" />
          <h3>Translator</h3>
        </a>
        <a href="/quotes">
          <img src="/assets/quote.svg" />
          <h3>Quotes</h3>
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
