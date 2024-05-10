<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCreditCard, faCircleQuestion, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'

// Get FontAwesome to Work
library.add(faCreditCard, faCircleQuestion, faMoneyCheck);

const loginWithGoogle = () => {
  console.log('Login with Google initiated');
  // TODO: Implement Google login with appropriate SDK
}

const loginWithGithub = () => {
  console.log('Login with GitHub initiated');
  // TODO: Implement Github login with appropriate SDK
}
</script>

<template>
  <section class="hero">
    <h1>Launch your website at lightning speed, not lightning prices.</h1>
    <h2>Get your website online in minutes with our easy setup and free hosting solutions.</h2>
    <div class="cta-buttons">
      <button class="gsi-material-button" @click="loginWithGoogle">
        <div class="gsi-material-button-state"></div>
        <div class="gsi-material-button-content-wrapper">
          <div class="gsi-material-button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style="display: block;">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </svg>
          </div>
          <span class="gsi-material-button-contents">Continue with Google</span>
          <span style="display: none;">Continue with Google</span>
        </div>
      </button>

      <button id="github-login" class="gsi-material-button" @click="loginWithGithub">
        <div class="gsi-material-button-state"></div>
        <div class="gsi-material-button-content-wrapper">
          <div class="gsi-material-button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" style="display: block;">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
            </svg>
          </div>
          <span class="gsi-material-button-contents">Continue with GitHub</span>
          <span style="display: none;">Continue with GitHub</span>
        </div>
      </button>
    </div>

    <div class="features">
      <div class="card">
        <FontAwesomeIcon icon="credit-card" beat class="icon" />
        <h3>100% Free</h3>
        <p>No hidden fees. No credit card required.</p>
      </div>
      <div class="card">
        <FontAwesomeIcon icon="circle-question" beat class="icon" />
        <h3>No Support</h3>
        <p>We do not provide any form of support.</p>
      </div>
      <div class="card">
        <FontAwesomeIcon icon="money-check" beat class="icon" />
        <h3>No Ads</h3>
        <p>We will never place ads on your sites.</p>
      </div>
    </div>
  </section>

  <div class="banner">
    <p>Unlimited Bandwidth</p>
    <p>•</p>
    <p>5 GB Storage</p>
    <p>•</p>
    <p>400 MySQL Databases</p>
    <p>•</p>
    <p>Full .htaccess Support</p>
    <p>•</p>
    <p>PHP 8.2</p>
    <p>•</p>
    <p>MySQL 5.7 / MariaDB 10.4</p>
    <p>•</p>
    <p>Free SSL</p>
  </div>
</template>

<style scoped>
.hero {
  h1 {
    font-family: "Lobster Two", "Open Sans", sans-serif;
    font-size: xxx-large;
  }

  .cta-buttons {
    margin: 5em 0 10em 0;
  }

  text-align: center;
  padding: 40px 20px;
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

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

#github-login {
  background: #171414;
  color: white;
}

.banner {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}

.banner p {
  display: flex;
  margin: 1em;
  color: var(--color-accent);
}

@media (max-width: 1024px) {
  .hero > .cta-buttons {
    margin: 2.5em 0 5em 0 !important;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .card {
    margin: 1em;
  }

  .banner {
    flex-direction: column;
  }
}

/* Continue w/ Google Styling */
.gsi-material-button {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  appearance: none;
  -webkit-appearance: none;
  background-color: white;
  background-image: none;
  border: 1px solid #747775;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #1f1f1f;
  cursor: pointer;
  font-family: 'Roboto', arial, sans-serif;
  font-size: 14px;
  height: 40px;
  letter-spacing: 0.25px;
  outline: none;
  overflow: hidden;
  padding: 0 12px;
  position: relative;
  text-align: center;
  -webkit-transition: background-color .218s, border-color .218s, box-shadow .218s;
  transition: background-color .218s, border-color .218s, box-shadow .218s;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
  max-width: 400px;
  min-width: min-content;
  margin: 0.5em 1em;
}

.gsi-material-button .gsi-material-button-icon {
  height: 20px;
  margin-right: 12px;
  min-width: 20px;
  width: 20px;
}

.gsi-material-button .gsi-material-button-content-wrapper {
  -webkit-align-items: center;
  align-items: center;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.gsi-material-button .gsi-material-button-contents {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}

.gsi-material-button .gsi-material-button-state {
  -webkit-transition: opacity .218s;
  transition: opacity .218s;
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.gsi-material-button:disabled {
  cursor: default;
  background-color: #ffffff61;
  border-color: #1f1f1f1f;
}

.gsi-material-button:disabled .gsi-material-button-contents {
  opacity: 38%;
}

.gsi-material-button:disabled .gsi-material-button-icon {
  opacity: 38%;
}

.gsi-material-button:not(:disabled):active .gsi-material-button-state,
.gsi-material-button:not(:disabled):focus .gsi-material-button-state {
  background-color: #303030;
  opacity: 12%;
}

.gsi-material-button:not(:disabled):hover {
  -webkit-box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15);
}

.gsi-material-button:not(:disabled):hover .gsi-material-button-state {
  background-color: #303030;
  opacity: 8%;
}

</style>