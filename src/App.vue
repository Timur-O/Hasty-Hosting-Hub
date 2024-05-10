<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" aria-label="Return to homepage.">
      <div class="logo"></div>
    </RouterLink>
  </header>

  <RouterView />

  <footer>
    <p>&copy Hasty Hosting Hub</p>
    <nav>
      <RouterLink to="/legal">Terms of Service & Privacy Policy</RouterLink>
    </nav>
  </footer>
</template>
