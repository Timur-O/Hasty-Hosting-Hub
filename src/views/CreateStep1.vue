<script setup lang="ts">
import { ref } from 'vue'
import { useNewAccountStore } from '@/stores/newAccount'
import router from '@/router'
import { useUserStore } from '@/stores/user'
import config from '@/config'

const newAccountStore = useNewAccountStore()
const userStore = useUserStore()

const form = ref({
  type: newAccountStore.type,
  label: newAccountStore.label,
  password: newAccountStore.password,
  domain: newAccountStore.domain,
  domainParent: newAccountStore.domainParent
})

const submitForm = () => {
  // TODO - Add validation
  newAccountStore.saveStep1(
    form.value.type!,
    form.value.label!,
    form.value.password!,
    form.value.domain!,
    form.value.domainParent!
  )
  if (form.value.type === 'sub') {
    router.push('/dashboard')
    return
  }
  router.push('/dashboard/create/verify')
}
</script>

<template>
  <RouterLink v-if="userStore.hostingProfiles.length !== 0" to="/create/plan" class="link"
    >Back</RouterLink
  >

  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="type">Type of Profile:</label>
      <select id="type" v-model="form.type" required>
        <option value="sub">Subdomain</option>
        <option value="own">Own Domain</option>
      </select>
    </div>
    <div class="form-group">
      <label for="label">Label:</label>
      <input id="label" v-model="form.label" type="text" required />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input id="password" v-model="form.password" type="password" required />
    </div>
    <div class="form-group">
      <label for="domain">Domain:</label>
      <input id="domain" v-model="form.domain" type="text" required />
    </div>
    <div class="form-group" v-if="form.type === 'sub'">
      <select v-model="form.domainParent" required>
        <option v-for="domain in config.parentSubdomains" :key="domain" :value="domain">
          {{ domain }}
        </option>
      </select>
    </div>
    <div class="form-group" v-if="form.type === 'sub' && form.domainParent">
      <label for="result">Chosen Domain:</label>
      <input id="result" :value="`${form.domain}.${form.domainParent}`" type="text" readonly />
    </div>
    <button class="form-group" type="submit">Continue</button>
  </form>
</template>

<style scoped>
form {
  width: 50vh;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type='text'],
input[type='email'],
input[type='password'],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  transition: border-color 0.2s;
}

input[type='text']:focus,
input[type='email']:focus,
input[type='password']:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-secondary);
}

button[type='submit'] {
  background-color: var(--color-primary);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.error-message {
  color: red;
  font-size: 12px;
  display: none;
}

input:invalid + .error-message {
  display: block;
}

select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23333'%3E%3Cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E"); /* Add dropdown arrow */
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 30px;
  transition: border-color 0.2s;
}

select:focus {
  outline: none;
  border-color: var(--color-secondary);
}
</style>
