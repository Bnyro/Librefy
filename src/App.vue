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
  @apply w-[fit-content] rounded-2xl px-4 py-2 bg-[var(--highlight-low)] hover:(bg-[var(--highlight)]);
}
#app .select {
  @apply bg-[var(--highlight)] w-auto p-2;
}
#app .areawrapper {
  @apply mx-3 flex flex-col justify-center items-center;
}
#app .textarea {
  @apply my-4 h-50 w-90 rounded-xl p-4;
}
</style>
