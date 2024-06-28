<script setup></script>

<!-- <template>
  <div class="absolute w-full h-full flex justify-center items-center">
    <button class="text-cpp-green bg-cpp-gold">The Escalator Is Broken</button>
  </div>
</template> -->

<template>
  <div
    class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
  >
    <button
      class="text-white mt-8 bg-weather-primary py-2 px-6"
      @click="$emit('close-modal')"
    >
      Close
    </button>
  </div>
</template>
