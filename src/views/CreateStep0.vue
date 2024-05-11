<script setup lang="ts">
import router from '@/router'
import { useUserStore } from '@/stores/user'
import config from '@/config'
import UpsellComponent from '@/components/UpsellComponent.vue'
const userStore = useUserStore()

const redirectToPremium: any = () => {
  router.push('/dashboard/create/plan')
}
</script>

<template>
  <RouterLink v-if="userStore.hostingProfiles.length !== 0" to="/" class="link">Back</RouterLink>

  <div class="container">
    <UpsellComponent
      planName="Free"
      planPrice="$0.00"
      planDescription="forever"
      diskSpace="5GB"
      bandwidth="Unlimited"
      domains="Unlimited"
      emailAccounts="0"
      cPanel="false"
      unlimitedHits="false"
      phpVersionSelection="false"
      phpMail="false"
      dnsManagement="false"
      remoteMySQL="false"
      pythonNode="false"
      url="/dashboard/create/plan"
    />
  </div>
</template>

<style scoped>
.container {
  width: 50vh;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
