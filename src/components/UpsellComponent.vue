<script setup lang="ts">
// Define props
const props = defineProps({
  planName: String,
  planPrice: String,
  planDescription: String,
  diskSpace: String,
  bandwidth: String,
  domains: String,
  emailAccounts: String,
  cPanel: String,
  unlimitedHits: String,
  phpVersionSelection: String,
  phpMail: String,
  dnsManagement: String,
  remoteMySQL: String,
  pythonNode: String,
  url: String
})
</script>

<template>
  <div class="card">
    <h3>{{ props.planName }}</h3>
    <h1>{{ props.planPrice}}</h1>
    <h3>{{ props.planDescription }}</h3>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  color: var(--color-accent);
  margin: 2em;
  border-radius: 5px;
  box-shadow: 0 0 1px 0 var(--color-accent);
  padding: 1.5em;
}

button {
  background-color: var(--color-primary);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
</style>
