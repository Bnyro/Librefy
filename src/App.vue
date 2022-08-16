<template>
  <router-view />
</template>

<style>
#app {
  background: var(--base);
}
#app h1 {
  @apply text-10xl font-bold;
}
#app h2 {
  @apply text-3xl;
}
#app h3 {
  @apply text-2xl;
}
#app a {
  @apply color-[var(--text)] decoration-none;
}
#app .surface {
  @apply rounded-[4em] bg-[var(--surface)] p-16 min-w-[50vw] max-w-[80vw];
}
#app .flex-container {
  @apply flex flex-col justify-center items-center h-[100vh];
}
#app .btn {
  @apply w-[fit-content] rounded-2xl px-4 py-2 bg-[var(--highlight-low)] hover:(bg-[var(--highlight)]);
}
#app .select {
  @apply bg-[var(--highlight)] w-auto p-2 rounded-2xl;
  border-right: 0.5em solid transparent; /* padding right for arrows */
}
#app .areawrapper {
  @apply mx-3 flex flex-col justify-center items-center;
}
#app .textarea {
  @apply my-4 h-50 max-w-[40vw] w-90 rounded-xl p-4;
}
</style>
