<template>
  <router-view />
</template>

<style>
#app {
  background: var(--base);
}
#app h1 {
  @apply text-3xl;
}
#app h2 {
  @apply text-2xl;
}
#app .surface {
  @apply rounded-4xl bg-[var(--surface)] p-16 w-[50vw];
}
#app .flex-container {
  @apply flex justify-center items-center h-[100vh];
}
#app .btn {
  @apply rounded-2xl px-4 py-2 bg-[var(--highlight-low)] hover:(bg-[var(--highlight)]);
}
#app .select {
  background: var(--highlight);
  width: auto;
  font-family: none;
  padding: 0.5rem;
}
#app .areawrapper {
  @apply mx-5 flex flex-col justify-center items-center;
}
#app .textarea {
  @apply my-4 h-30;
}
</style>
