<template>
<main>
  <div class="menu">
    <profile-card />
    <menu-item v-for="item in menuItems">{{ item.name }}</menu-item>
  </div>
  <div class="content">
    <br v-for="n in 200">
  </div>
</main>
</template>

<script >
  import ProfileCard from "./profileCard";
  import MenuItem from "./menuItem";

  export default {
  name: "TheMain",
  components: {MenuItem, ProfileCard},
    data() {
      return {
        menuItems: [
          {icon:'', name: 'Мероприятия', link:''},
          {icon:'', name: 'Проекты', link:''},
          {icon:'', name: 'Архив проектов', link:''},
          {icon:'', name: 'Мои заявки', link:''},
          {icon:'', name: 'Грантовые соглашения', link:''},
          {icon:'', name: 'Отчеты', link:''},
        ]
      }
    }
  }
</script>

<style>


  main {
    display: grid;
    grid-template-columns:  256px 1fr;
    min-height: 200px;

  }

  .menu {
    background-color: #F5F6F7;
    box-shadow: 0px 2px 16px 5px rgba(0, 0, 0, 0.15);
    max-height: 700px;
    height: max-content;
  }

  .content {
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    height: calc(100vh - 102px);
    /*height: max-content;*/
    overflow-y: scroll;
  }

</style>
