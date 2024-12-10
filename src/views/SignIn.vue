<script setup>
import { ref } from 'vue'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '..//components/BaseButton.vue'
import { login } from '../api/rest/authorization'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const form = ref({
  email: '',
  password: '',
})

const handleLogin = async () => {
  try {
    const {
      data: { jwt, user },
    } = await login({
      identifier: form.value.email,
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
  <h1 class="title loginTitle">Вход в аккаунт</h1>
  <form @submit.prevent="handleLogin" class="form">
    <BaseInput
      v-model="form.email"
      type="email"
      id="email"
      name="email"
      label="Email"
    />
    <BaseInput
      v-model="form.password"
      type="password"
      id="password"
      name="password"
      placeholder="Пароль"
    />
    <BaseButton type="submit">Войти</BaseButton>
    <div class="wrapper">
      <!-- <NuxtLink to="/register" class="form__link">Регистрация</NuxtLink> -->
      <!-- <NuxtLink to="/" class="form__link">Забыли пароль?</NuxtLink> -->
    </div>
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
  text-decoration: none;
}

.form .btn {
  display: block;
  padding: 10px 12px;
  border-radius: 12px;
  outline: none;
  border: 1px solid var(--color-border);
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
