<template>
  <div class="question"> </div>
</template>

<script>
export default {
name: "question"
}
</script>

<style scoped>
  .question{
    width: 65px;
    height: 65px;
    background-color: #fff;
    border: 1px solid #D9D9D9;
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.25);
    background-image: url("assets/icons/question.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 17px;
    border-radius: 50%;
  }

  .question{
    position: absolute;
    right: 48px;
    bottom: 59px;
  }
</style>
