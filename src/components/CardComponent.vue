<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCreditCard,
  faCircleQuestion,
  faMoneyCheck,
  fa1,
  fa2,
  fa3
} from '@fortawesome/free-solid-svg-icons'

// Get FontAwesome to Work
library.add(faCreditCard, faCircleQuestion, faMoneyCheck, fa1, fa2, fa3)

// Define props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <FontAwesomeIcon :icon="`${props.icon}`" beat class="icon" />
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
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

.icon {
  margin: 0.5em 0;
  font-size: 25px;
  color: var(--color-primary);
}
</style>
