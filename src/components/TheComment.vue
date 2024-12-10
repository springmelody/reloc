<template>
  <div class="comment">
    <div class="comment__img"><img src="" alt="" /></div>
    <p class="comment__text">Было очень интересно.</p>
  </div>
</template>

<style scoped>
.comment {
  border: 2px solid var(--color-border);
  border-radius: 12px;
  display: flex;
  gap: 20px;
}

.comment__img {
  width: 50px;
  height: 50px;
  background-color: var(--color-accent);
  border-radius: 50%;
}

.comment__img img {
  display: block;
  width: 100%;
}

.comment__text {
  color: var(--color-text);
  font-size: 18px;
  line-height: 21px;
}
</style>
