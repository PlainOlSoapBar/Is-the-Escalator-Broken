<script setup>
  import HomePage from '@/components/HomePage.vue';
</script>

<template>
  <container>
    <HomePage />
  </container>
</template>

<style lang="scss" scoped>
  container {
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 45vh;
    padding-right: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
