<template>
  <router-view />
</template>

<style>
#app {
  background: var(--base);
}
#app a {
  @apply no-underline;
}
#app .surface {
  @apply rounded-[4em] bg-[var(--surface)] p-16 min-w-[50vw] max-w-[80vw];
}
#app .flex-container {
  @apply flex flex-col justify-center items-center min-h-[100vh];
}
#app .btn {
  @apply w-[fit-content] rounded-2xl px-4 py-2 bg-[var(--highlight-low)] hover:bg-[var(--highlight)] hover:cursor-pointer;
}
#app .select {
  @apply bg-[var(--highlight)] w-auto p-2 rounded-2xl border-none;
  border-right: 0.5em solid transparent; /* padding right for arrows */
}
#app .areawrapper {
  @apply mx-3 flex flex-col justify-center items-center;
}
#app .textarea {
  @apply my-4 h-50 max-w-[40vw] w-90 rounded-xl p-4 border-none bg-[var(--highlight-low)];
}
#app .input {
  @apply bg-[var(--highlight-low)] border-none rounded-xl p-2;
}
#app .summary {
  @apply hover:cursor-pointer my-3;
}
</style>
