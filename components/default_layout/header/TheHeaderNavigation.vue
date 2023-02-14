<template>
    <nav class="header-navigation__container">
        <ul>
            <li><NuxtLink to="/" class="header-navigation__link">
                <img src="../../../assets/icons/Union.svg" alt="" loading="lazy">
                <p>Главная</p>
            </NuxtLink></li>
            <li><NuxtLink to="#" class="header-navigation__link">
                <img src="../../../assets/icons/help.svg" alt="" loading="lazy">
                <p>Помощь</p>
            </NuxtLink></li>
            <li><NuxtLink to="#" class="header-navigation__link">
                <img src="../../../assets/icons/base.svg" alt="" loading="lazy">
                <p>База знаний</p>
            </NuxtLink></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: "TheHeaderNavigation"
}
</script>

<style scoped>

 * {
    padding: 0;
    margin: 0;
 }
 .header-navigation__container ul {
    display: flex;
    margin-right: 18px;
    text-decoration: none;
 }

 .header-navigation__container ul li {
    margin-right: 18px;
    list-style-type: none;
 }

 .header-navigation__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000000;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
 }

 .header-navigation__link img {
    margin-right: 7px;
 }


</style>
