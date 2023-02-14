<template>
  <div class="layout-wrap">
    <TheHeader/>
    <TheMain/>
  </div>
</template>

<script>
  // import Button from "./components/buttons/btn.vue";
  import TheHeader from "../components/default_layout/header/TheHeader";
  import TheMain from "../components/default_layout/main/TheMain";

  export default {
    name: "defaultLayout",
    components: {TheMain, TheHeader}
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
    overflow: hidden;
  }

  .layout-wrap{
    display: grid;
    /*justify-content: center;*/
    grid-template-rows: 64px 1fr;
    /*row-gap: 23px;*/
    padding: 0 48px;
  }

  main, header{
    /*width: calc(256px + 1252px);*/
  }

  .dark{
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: #000000;
  }
  * {
    padding: 0;
    margin: 0;
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }

</style>
