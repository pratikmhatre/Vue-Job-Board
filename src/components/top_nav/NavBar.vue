<template>
    <div id="bar">
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" id="logo">
        <div class="field-list">
            <nav-item v-for="f in fields" :key="f.name" :field="f"></nav-item>
        </div>
    </div>
</template>
<script>
import NavItem from './NavItem.vue'
// import {mapGetters} from 'vuex';
export default {
    components: {
        NavItem
    },
    computed : {
        fields(){
            return this.$store.getters.fieldsList;
        }
        // ...mapGetters(['fields'])
    },
}
</script>
<style scoped>
img{
    height: 50px;
    margin-top: 30px;
}
 #bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    height: 200px;
    background: darkblue;
 }
 .field-list {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: center;
 }
</style>