<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app h1 {
  @apply text-3xl;
}
#app h2 {
  @apply text-2xl;
}
#app .surface {
  @apply rounded-4xl bg-[var(--surface)] p-16;
}
#app .flex-container {
  @apply flex justify-center items-center h-[100vh];
}
#app .btn {
  @apply rounded-2xl px-4 py-2 bg-[var(--highlight-low)] hover:(bg-[var(--highlight)]);
}
</style>
