<template>
    <div class="item">
        <span>
            <slot></slot>
        </span>
        <base-icon-button mode="iconButton">
            <icon-next-arrow-black></icon-next-arrow-black>
        </base-icon-button>
    </div>
</template>

<script>
import IconNextArrowBlack from "./icons/IconNextArrowBlack.vue";

export default {
    components: {
        IconNextArrowBlack
    }
}
</script>

<style scoped>
.item {
    color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 3px rgba(172, 170, 169, 0.15);
    padding: 8px 16px;
    border-radius: 4px;
    margin: 8px 0px 0px 8px;
    font-weight: 600;
    width: 268px;
    font-size: 15px;
}

.iconButton {

    color: rgba(0, 0, 0, 0.65);
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

@media screen and (max-width: 712px) {
    .item {
        flex-basis: 100%;
    }
}

/* @media (min-width: 576px) and (max-width: 768px) {
    .item {
        flex-basis: 50%;
    }
} */

@media (min-width: 1120px) and (max-width: 1201px) {

    .item {
        flex-basis: 30%;
        flex-grow: 2;
    }
}

@media (min-width: 1201px) and (max-width: 1230px) {
    .item {
        flex-basis: 32%;
    }
}
</style>