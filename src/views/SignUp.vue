<script setup>
import BaseButton from '../components/BaseButton.vue'
import TheLoader from '../components/TheLoader.vue'
import { register } from '../api/rest/register'
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const form = ref({
  email: '',
  username: '',
  password: '',
})

const handleRegister = async () => {
  try {
    const {
      data: { jwt, user },
    } = await register({
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
    })
    userStore.jwt = jwt
    userStore.user = user

    localStorage.setItem('userInfo', JSON.stringify({ jwt, user }))
  } catch (error) {
    console.log(error)
  }
  router.push('/')
}
</script>

<template>
  <h1 class="title loginTitle">Регистрация</h1>
  <form @submit.prevent="handleRegister" class="form">
    <BaseInput
      v-model="form.email"
      type="email"
      id="email"
      name="email"
      label="Почта"
    />
    <BaseInput
      v-model="form.username"
      type="text"
      id="username"
      name="username"
      label="Логин"
    />

    <BaseInput
      v-model="form.password"
      type="password"
      id="password"
      name="password"
      placeholder="Пароль"
    />

    <BaseButton type="submit">Зарегистрироваться</BaseButton>
    <!-- <TheLoader v-if="authStore.loader">Sending...</TheLoader> -->
  </form>
</template>

<style scoped>
.form {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 12px;
}

.form__link {
  font-size: 16px;
  color: var(--color-link);
}

.loginTitle {
  margin-bottom: 40px;
  text-align: center;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
