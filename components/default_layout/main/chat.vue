<template>
  <div class="chat" v-bind:class = "(isVisible)?'visible':''"></div>
</template>

<script>
  export default {
    name: "chat",
    props: {
      isVisible: Boolean,
    }
  }
</script>

<style scoped>
  .chat{
    cursor: pointer;
    width: 0px;
    height: 0px;
    background-color: #fff;
    border: 1px solid #D9D9D9;
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    transition: .1s;
  }

  .chat{
    position: absolute;
    right: 48px;
    bottom: 137px;
  }

  .chat.visible{
    width: 520px;
    height: 756px;
  }
</style>
