<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import router from '@/router'
import firebase from '../firebase'
import 'firebase/compat/auth'
import CardComponent from '@/components/CardComponent.vue'

const userStore = useUserStore()

if (userStore.hostingProfiles.length === 0) {
  router.push('/dashboard/create/plan')
}

const logout: any = () => {
  firebase.auth().signOut()
  userStore.logout()
  router.push('/')
}

const redirectToSpecificProfile: any = (index: number) => {
  router.push(`/dashboard/${index}`)
}
</script>

<template>
  <section class="hero">
    <h1>Welcome to your dashboard, {{ userStore.email }}</h1>
    <p class="link" @click="logout()">Wait, this isn't me! I'd like to logout.</p>

    <div class="accounts">
      <CardComponent
        v-for="(account, index) in userStore.hostingProfiles"
        :key="index + 1"
        :title="account.label"
        :description="'Click to Manage Profile.'"
        :icon="(index + 1).toString()"
        @click="redirectToSpecificProfile(index)"
      />
    </div>
  </section>
</template>

<style scoped>
.link {
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
}
</style>
