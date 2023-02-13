<template>
  <Button/>
</template>

<script>
  import Button from "./components/buttons/btn.vue";

  export default {
    name: "default",
    components: {Button}
  }
</script>

<style >
  body {
    margin: 0;
    font-family: 'Open Sans',sans-serif !important;
    font-size: 16px;
    line-height: 1.5;
    color: #000000;
    background-color: #F5F5F5;
    overflow-x: hidden;
  }
  * {
    padding: 0;
    margin: 0;
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }

</style>
