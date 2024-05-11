import { defineStore } from 'pinia'
import type Account from '@/models/Account'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    email: null as string | null,
    hostingProfiles: [] as Account[]
  }),
  actions: {
    login(email: string | null) {
      this.email = email
      this.hostingProfiles = []
      // TODO - fetch hosting profiles
    },
    logout() {
      this.email = null
      this.hostingProfiles = []
    }
  }
})
