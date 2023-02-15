<template>
  <div class="menu-item">
    <div class="item-icon">

    </div>
    <div class="item-text">
      <slot>item</slot>
    </div>
  </div>
</template>

<script>
export default {
name: "menuItem"
}
</script>

<style scoped>
  .menu-item{
    padding: 16px;
    border-bottom: 1px solid #dde2e5;
    transition: color .15s,background-color .15s,border-color .15s;
    cursor: pointer;
    font-family: 'PT Root UI', -apple-system, blinkmacsystemfont, 'Segoe UI',
    roboto, helvetica, arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  }

  .item-text{
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
  }

  .menu-item:hover{
    color:#e19417;
    background-color: #fff6e8;
  }
</style>
