<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});
</script>
<template>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
.input {
  display: block;
  padding: 10px 12px;
  border-radius: 12px;
  outline: none;
  border: 1px solid var(--color-border);
}

.input::placeholder {
  color: var(--color-placeholder);
}
</style>
