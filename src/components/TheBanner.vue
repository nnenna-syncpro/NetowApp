<template>
    <div>
        <banner-content-item contentCaption="We Test & Analyse Bugs" buttonCaption="Call Us">
            <template #contentCaption>We Test & Analyse Till It's Bug Free</template>
            <template #bannerButton>
                <slot>
                    <base-button caption="Call Us Now">Get in touch</base-button>
                </slot>
            </template>
        </banner-content-item>
    </div>
    <banner-carousel-indicators></banner-carousel-indicators>
</template>

<script>
import BannerContentItem from "./BannerContentItem.vue";
import BannerCarouselIndicators from "./BannerCarouselIndicators.vue";

export default {
    components: {
        BannerContentItem,
        BannerCarouselIndicators
    }
}
</script>

<style scoped>
button {
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    padding: 6px 12px;
    line-height: 1.5;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    text-decoration: none;

    /* position on image */
    margin: 0;
    position: absolute;
    top: 74%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

/* :slotted(button) {
    display: flex;
    justify-content: center;
    align-items: center;
} */

button:hover,
button:active,
button:active {
    background-color: rgba(255, 255, 255, 0.85);
    border: none;
    color: black;
    text-decoration: none;
    font-size: 14px;
    border-radius: 4px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    padding: 6px 12px;
    line-height: 1.5;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
</style>