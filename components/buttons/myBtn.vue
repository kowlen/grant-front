<template>
  <button class="my-btn">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "myBtn"
}
</script>

<style scoped>

.my-btn {
  border: none;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
}

.my-btn-user {
  color: rgb(250,164,25);
  background-color: rgba(10, 10, 10,0);
}

.my-btn-user:hover {
  color: rgb(207, 138, 27);
}

.my-btn-default {
  background-color: rgb(50,185,179);
  border-radius: 5px;
  padding: 10px 20px;
  color: #fff;
}

.my-btn-default:hover {
  background-color: rgb(35, 128, 123);
  color: #fff;
}



</style>
