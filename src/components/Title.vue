<template>
  <h1 class="title"><slot /></h1>
</template>

<style scoped>
  .title {
    font-family: "Jacques Francois Shadow", serif;
    font-size: 96px;
    color: var(--accent-color);
    text-align: center;
    margin: 0;
    margin-bottom: 32px;
    /* margin-bottom: 70px; */
  }
</style>