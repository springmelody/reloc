import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const jwt = ref('')
  const user = ref(null)
  const error = ref('')
  const loader = ref(false)

  const logout = () => {
    jwt.value = ''
    user.value = null
  }

  return { jwt, user, error, loader, logout }
})
