<template>
<main>
  <div class="menu"></div>
  <div class="content">
    <br>
    <br>
  </div>
</main>
</template>

<script>
export default {
name: "TheMain"
}
</script>

<style >


  main {
    display: grid;
    grid-template-columns:  256px 1fr;
    min-height: 200px;

  }

  .menu {
    background-color: #F5F6F7;
    box-shadow: 0px 2px 16px 5px rgba(0, 0, 0, 0.15);
    max-height: 700px;
  }

  .content {
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    height: calc(100vh - 129px);
    /*height: max-content;*/
    overflow-y: scroll;
  }

  .menu, .content { padding: 10px }
</style>
