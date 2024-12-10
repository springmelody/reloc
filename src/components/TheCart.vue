<script setup>
import TheStars from './TheStars.vue'
import TheComment from './TheComment.vue'
</script>
<template>
  <div class="cart">
    <h2 class="cart__city">Турция</h2>
    <h3 class="cart__title">Описание</h3>
    <p class="cart__text">
      Стамбул – крупнейший город Турции на берегах пролива Босфор, который
      разделяет его на европейскую и азиатскую части. В Старом городе
      сохранились здания различных исторических эпох. В районе Султанахмет
      расположены возведенный римлянами Ипподром, где в течение многих столетий
      проводили гонки на колесницах, и Египетский обелиск.
    </p>
    <h3>Оценка</h3>
    <TheStars />
    <h3>Комментарии</h3>
    <TheComment />
  </div>
</template>

<style>
.cart {
  max-width: 500px;
  border-radius: 12px;
  padding: 20px;
  background-color: var(--color-back-secondary);
  margin-left: auto;
}

.cart__city {
  font-size: 26px;
  line-height: 32px;
  color: var(--color-title);
}

.cart__title {
  font-size: 22px;
  line-height: 29px;
  color: var(--color-title);
}

.cart__text {
  font-size: 18px;
  line-height: 21px;
  color: var(--color-text);
}
</style>
