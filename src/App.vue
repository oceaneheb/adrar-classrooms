<template>
  <div class="app">
      <router-view />
  </div>
</template>

<script>
  
</script>

<style Lang="scss">
:root {
      --primary: #65C0ED;
      --dark: #212529;
      --grey: #31383E;
      --light: #F1F5F9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: var(--light);
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }

  .app {
    display: flex;

    main {
      flex: 1 1 0;
      padding: 2rem;

      @media (max-width: 768px) {
        padding-left: 6rem;
      }
    }
  }
</style>
