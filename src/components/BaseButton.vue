<template>
  <button v-bind="$attrs" class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  display: block;
  padding: 10px 12px;
  border-radius: 12px;
  outline: none;
  border: 1px solid var(--color-border);
  background-color: var(--color-back-btn);
  color: var(--color-text-btn);
}

.btn:focus {
  background-color: var(--color-back-btn-focus);
}

.btn:active {
  background-color: #471bbf;
}
</style>
