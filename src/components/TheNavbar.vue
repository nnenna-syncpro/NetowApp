<template>
    <nav class="navbar">
        <a class="navbar-brand-logo"><img src="../assets/img/netow_logo_small.png" alt=""></a>
        <div class="navbar__content">
            <ul class="navbar__nav">
                <navbar-item>Home</navbar-item>
                <navbar-item>About</navbar-item>
                <navbar-item>Our services</navbar-item>
                <navbar-item>Blog</navbar-item>
                <navbar-item>Careers</navbar-item>
                <navbar-item>Contact Us</navbar-item>
            </ul>
            <form class="searchForm" action="" @submit.prevent="">
                <div class="form-control">
                    <input type="search" ref="searchInput" class="searchForm__input">
                    <base-icon>
                        <icon-search></icon-search>
                    </base-icon>
                </div>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";
import BaseIcon from './UI/BaseIcon.vue';
import IconSearch from "./icons/IconSearch.vue";

export default {
    components: {
        NavbarItem,
        BaseIcon,
        IconSearch
    }
}
</script>

<style scoped>
.navbar-brand-logo {
    padding: 1.6px 8px;
    border: 1px solid;
    border-radius: 6px;
    color: #fff;
    background-color: #fff;
    display: inline-block;
    font-size: 20px;
    line-height: inherit;
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
    font-weight: 400;
    text-align: left;
    margin-right: 48px;
}

.navbar {
    display: flex;
    flex-direction: row;
    padding: 8px 16px;
    background-color: #20345c;
}

.navbar__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 48px;
    width: 100%;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
}

.searchForm {
    display: inline-block;
    position: relative;
    margin-left: auto;
}

.searchForm__input {
    /* :focus */
    width: 192px;
    border-radius: 30px;
    caret-color: white;
    background-color: transparent;
    padding: 4px 12px;
    font-size: 16px;
    line-height: 1.5;
    border: 1px solid #ced4da;
    background-clip: padding-box;
    /* transition: <property> <duration> <timing-function> <delay>; */
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    /* 
    vertical-align: middle;
    display: inline-block;
    color: #495057;
    overflow: visible; */
}

.searchForm__input:focus {}
</style>