<template>
    <label class="hamburger-menu">
        <input type="checkbox">
    </label>
    <div class="navContainer">
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
                        <base-icon-button mode="iconButton icon">
                            <icon-search></icon-search>
                        </base-icon-button>
                    </div>
                </form>
            </div>
            <div class="hamburger">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </nav>
    </div>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";
import IconSearch from "./icons/IconSearch.vue";
import BaseIconButton from './UI/BaseIconButton.vue';

export default {
    components: {
        NavbarItem,
        IconSearch,
        BaseIconButton
    },
}
</script>

<style scoped>
.iconButton {
    overflow: visible;
    width: 15px;
    background-color: transparent;
    border: none;
}

.icon {
    color: #fff;
    position: relative;
    right: 24px;
    top: 2px;
}

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

/* would need to move logo out of nav and give a wrapper parent which we shall set position to fixed and width 100% */

.hamburger {
    cursor: pointer;
    align-items: right;
    display: none;
    /* border: 1px solid rgba(196, 196, 196, 1); */
    padding: 5px;
}

.bar {
    height: 3px;
    width: 40px;
    background: rgba(196, 196, 196, 1);
    margin: 5px 0px;
    opacity: 0.8;

    /* margin-bottom: 10px; */
    border-radius: 7px;
    transition: .4s;
}

.hamburger-menu input {
    display: none;
}

@media (max-width: 1045px) {
    nav .navbar__nav {
        display: grid;
        position: absolute;
        background: #20345c;
        width: 100%;
        top: 50px;
        left: 0px;
        transform: translateY(0%);
        /* z-index: -1; */
        transition: .6s;

    }

    .navbar__content {
        /* display: grid;
        position: absolute;
        background: #20345c;
        width: 100%;
        top: 50px;
        left: 0px;
        transition: .6s; */
        /* transform: translateY(-100%); */
        z-index: -1;
    }

    nav .navbar__nav {}

    .hamburger {
        display: grid;
        height: min-content;
        cursor: pointer;
        margin-right: 18px -10px 0 0;
    }

    .bar {}

}
</style>