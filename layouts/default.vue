<template>
  <div class="layout-wrap">
    <TheHeader/>
    <TheMain/>
    <question/>
  </div>
</template>

<script>
  // import Button from "./components/buttons/btn.vue";
  import TheHeader from "../components/default_layout/header/TheHeader";
  import TheMain from "../components/default_layout/main/TheMain";
  import Question from "../components/default_layout/question";

  export default {
    name: "defaultLayout",
    components: {Question, TheMain, TheHeader}
  }
</script>

<style >
  body {
    margin: 0;
    font-family: 'Open Sans',sans-serif !important;
    font-size: 16px;
    line-height: 1.5;
    color: #2e2f33;
    background-color: #F5F5F5;
    overflow: hidden;
  }

  .layout-wrap{
    display: grid;
    /*justify-content: center;*/
    grid-template-rows: 64px 1fr;
    /*row-gap: 23px;*/
    padding: 0  8vh;
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

  ::-webkit-scrollbar {
    width: 4.5px;
    height: 6.5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #8c64d8;
  }

  @font-face {
    font-family: "PT Root UI";
    font-weight: 900;
    src: url(/assets/fonts/pt-root-ui-bold.woff2); /* Путь к файлу со шрифтом */
  }

  @font-face {
    font-family: "PT Root UI";
    font-weight: 500;
    src: url(/assets/fonts/pt-root-ui-regular.woff2); /* Путь к файлу со шрифтом */
  }

  @font-face {
    font-family: "PT Root UI";
    font-weight: 300;
    src: url(/assets/fonts/pt-root-ui-medium.woff2); /* Путь к файлу со шрифтом */
  }

  @font-face {
    font-family: "PT Root UI";
    font-weight: 100;
    src: url(/assets/fonts/pt-root-ui-light.woff2); /* Путь к файлу со шрифтом */
  }

</style>
