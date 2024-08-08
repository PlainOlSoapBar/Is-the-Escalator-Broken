<script>
  import { RouterLink } from 'vue-router';

  export default {
    components: {
      RouterLink,
    },
  };
</script>

<template>
  <div class="container">
    <div class="header">Is The Escalator Broken Today?</div>
    <ul class="button-row">
      <button class="yes-button">Yes</button>
      <button class="calendar-button">See Calendar</button>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding: 30px;
    max-width: 800px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  .header {
    font-size: clamp(1.8rem, 5vw, 2rem);
    text-align: left;
    margin-bottom: 10px;
    color: #ffb71a;
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    white-space: nowrap;
  }

  .button-row {
    display: flex;
    gap: 1rem;

    button {
      align-items: left;
      width: 170px;
      height: 50px;
      font-size: 1.2rem;
    }

    ul {
      display: flex;
      flex: 1;
      list-style: none;
    }
  }

  .yes-button {
    background-color: #ffb71a;
    color: #164734;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .calendar-button {
    background-color: #164734;
    color: #ffb71a;
    border: 2px solid #ffb71a;
    border-radius: 10px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>
