<template>
    <div class="header-navigation__container">
    <nav>
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
    <nav class="header-navigation__">
        <ul>
                <li><NuxtLink to="#" class="header-navigation__link">
                    <img src="../../../assets/icons/avatar.jpg" alt="" decoding="async" loading="lazy" width="25" height="25" class="avatar-mini">
                </NuxtLink></li>
                <li><NuxtLink to="#" class="header-navigation__link">
                    <svg fill="none" class="header-navigation_lang__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false"><path d="M13.6016 4.66667H0.398193C1.35914 1.94788 3.95204 0 6.99988 0C10.0477 0 12.6406 1.94788 13.6016 4.66667Z" fill="#DDE2E5"></path><path d="M13.6018 9.33325C13.8599 8.60352 14 7.81812 14 7C14 6.18188 13.8596 5.39648 13.6016 4.6665H0.398438C0.140381 5.39648 0 6.18188 0 7C0 7.81812 0.140137 8.60352 0.398193 9.33325H13.6018Z" fill="#2D35FF"></path><path d="M13.6018 9.33325C12.6409 12.052 10.0479 14 7 14C3.95215 14 1.35913 12.052 0.398193 9.33325H13.6018Z" fill="#D60000"></path></svg>
                </NuxtLink></li>
                <li><NuxtLink to="#" class="header-navigation__link">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="header-navigation_to-home__icon" focusable="false"><path d="M12.052 14.829l1.414 1.414L17.71 12l-4.243-4.243-1.414 1.415L13.88 11H6.343v2h7.537l-1.828 1.829z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 19a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5a4 4 0 00-4 4v14zm4 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" fill="currentColor"></path></svg>
                </NuxtLink></li>
        </ul>
    </nav>
    </div>
    
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

 .header-navigation__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
 }
 nav ul {
    display: flex;
    margin-right: 18px;
    text-decoration: none;
 }

 nav ul li {
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
    transition: 0.4s;
 }
 
 .header-navigation__link:hover {
    color: rgb(50,185,179)
 }

 .avatar-mini {
    border-radius: 50%;
    margin: 0%;
 }

 .header-navigation__link img {
    margin-right: 7px;
 }

 .header-navigation_lang__icon, .header-navigation_to-home__icon {
    width: 25px;
    height: 25px;

 }


</style>
