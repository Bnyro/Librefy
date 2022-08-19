<template>
  <footer>
    <span>
        <p>© 2022 <a href="/">Librefy</a></p>
        <div id="social">
          <a href="https://github.com/bnyro/librefy"><img src="/assets/github.svg" /></a>
        </div>
      </span>
  </footer>
</template>

<style scoped>
footer {
  @apply h-28 bg-[var(--surface)] flex justify-between items-center;
}

footer > span {
  @apply flex justify-between items-center w-[70vw] m-auto;
}

footer div {
  @apply flex justify-end;
}

footer div a {
  @apply mx-4;
}

footer div a img {
  @apply h-6 w-6 invert;
}
</style>