<template>
  <div class="loader">
    <slot></slot>
  </div>
</template>

<style scoped>
.loader {
  font-size: 21px;
  line-height: 18px;
  padding: 10px 10px 10px 0;
  background-image: linear-gradient(
    180deg,
    var(--color-loader-left) 0%,
    var(--color-loader-right) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
