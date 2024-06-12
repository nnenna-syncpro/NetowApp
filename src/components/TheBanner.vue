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
import BaseButton from './UI/BaseButton.vue';
import BannerCarouselIndicators from "./BannerCarouselIndicators.vue";

export default {
    components: {
        BannerContentItem,
        BaseButton,
        BannerCarouselIndicators
    }
}
</script>