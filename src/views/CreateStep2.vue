<script setup lang="ts">
import { useNewAccountStore } from '@/stores/newAccount'

const newAccountStore = useNewAccountStore()
</script>

<template>
  <RouterLink to="/dashboard/create/info" class="link">Back to Dashboard</RouterLink>

  <div class="explanation-container">
    <h3>Verify Your Domain</h3>
  </div>
</template>

<style scoped>
.explanation-container {
  width: 50vh;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
