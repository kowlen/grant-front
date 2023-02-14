<template>
    <header>
        <TheLogo/>
        <TheHeaderNavigation/>
    </header>
</template>

<script>
import TheLogo from './TheLogo.vue';
import TheHeaderNavigation from './TheHeaderNavigation.vue';

export default {
    name: "TheHeader",
    components: { TheLogo, TheHeaderNavigation}
}
</script>

<style scoped>
 header {
    display: flex;
 }
</style>