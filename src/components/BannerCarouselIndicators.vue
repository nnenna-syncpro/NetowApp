<template>
    <div class="banner-indicators">
        <div class="carousel-numbers">
            <a>01</a>
            <a>02</a>
            <a>03</a>
            <a>04</a>
            <a>05</a>
        </div>
        <div class="carousel-mouse">
            <a href="">
                <base-icon mode="iconButton">
                    <icon-mouse></icon-mouse>
                </base-icon>
            </a>
            <p>Scroll for More</p>
        </div>
        <div class="carousel-arrows">
            <base-icon mode="iconButton">
                <icon-previous-arrow-white></icon-previous-arrow-white>
            </base-icon>
            <base-icon mode="iconButton">
                <icon-next-arrow-white></icon-next-arrow-white>
            </base-icon>
        </div>
    </div>
</template>

<script>
import IconPreviousArrowWhite from './icons/IconPreviousArrowWhite.vue';
import IconNextArrowWhite from './icons/IconNextArrowWhite.vue';
import IconMouse from "./icons/IconMouse.vue"

export default {
    components: {
        IconPreviousArrowWhite,
        IconNextArrowWhite,
        IconMouse
    }
}
</script>

<style scoped>
.banner-indicators {
    background-color: #20345c;
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.iconButton {
    padding: 0 2px;
    margin: 0 3px;
    overflow: visible;
    text-transform: none;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 4px;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    text-decoration: none;
    width: 15px;
    background-color: transparent;
    border: none;
}

.carousel-numbers {
    float: left;
    position: relative;
    z-index: 20;
    padding-top: 16px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}

a {
    padding: 0 4px;
}

.carousel-arrows {
    padding-top: 16px;
    background-color: transparent;
}

.carousel-mouse {
    color: #fff;
    margin-left: -50px;
}

p {
    padding: 10px;
    margin-left: -40px;
    font-size: 14px;
}
</style>