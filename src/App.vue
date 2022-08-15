<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #e0def4;
  background: #191724;
  font-size: initial;
}
#app h1 {
  @apply text-3xl;
}
#app h2 {
  @apply text-2xl;
}
</style>
