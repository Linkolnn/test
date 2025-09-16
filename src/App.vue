<script setup>
import Header from '@components/Header.vue';
import WelcomeSection from '@components/WelcomeSection.vue';
import OrderSection from '@components/OrderSection.vue';
import Footer from '@components/Footer.vue';
</script>

<template>
  <Header/>
  <main class="main">
    <WelcomeSection/>
    <OrderSection/>
  </main>
  <Footer/>
</template>

<style>
</style>
