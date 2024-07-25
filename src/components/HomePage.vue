<script>
  import { RouterLink } from 'vue-router';

  export default {
    components: {
      RouterLink,
    },
  };
</script>

<template>
  <div>
    <div class="header">Is The Escalator Broken Today?</div>
    <ul class="button-row">
      <button class="yes-button">Yes</button>
      <button class="calendar-button">See Calendar</button>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    font-size: 2rem;
    text-align: left;
    margin-bottom: 10px;
    color: #ffb71a;
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .button-row {
    display: flex;
    align-items: center;
    gap: 20px;

    button {
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
