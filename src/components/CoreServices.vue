<template>
    <div class="coreServices">
        <div class="coreServicesText">
            <div class="prevButton roundedIcon">
                <base-icon-button mode="iconButton">
                    <icon-less-than></icon-less-than>
                </base-icon-button>
            </div>
            <div class="coreServiceItems">
                <core-service-item class="item">
                    <template #icon>
                        <icon-rocket></icon-rocket>
                    </template>
                    <template #serviceTitle>
                        Creative Design
                    </template>
                    <template #serviceText>
                        Designing to us is something magical - we are lucky that our clients let us get creative and
                        build
                        new products, this are the steps we follow through
                    </template>
                    <template #iconButton>
                        <base-icon-button mode="iconButton rounded">
                            <icon-next-arrow-black></icon-next-arrow-black>
                        </base-icon-button>
                    </template>
                </core-service-item>
                <core-service-item class="item">
                    <template #icon>
                        <icon-window-code></icon-window-code>
                    </template>
                    <template #serviceTitle>
                        Development
                    </template>
                    <template #serviceText>
                        Designing to us is something magical - we are lucky that our clients let us get creative and
                        build
                        new products, this are the steps we follow through
                    </template>
                    <template #iconButton>
                        <base-icon-button mode="iconButton">
                            <icon-next-arrow-black></icon-next-arrow-black>
                        </base-icon-button>
                    </template>
                </core-service-item>
                <core-service-item class="item">
                    <template #icon>
                        <icon-headphones></icon-headphones>
                    </template>
                    <template #serviceTitle>
                        Support
                    </template>
                    <template #serviceText>
                        Designing to us is something magical - we are lucky that our clients let us get creative and
                        build
                        new products, this are the steps we follow through
                    </template>
                    <template #iconButton>
                        <base-icon-button mode="iconButton">
                            <icon-next-arrow-black></icon-next-arrow-black>
                        </base-icon-button>
                    </template>
                </core-service-item>
            </div>
            <div class="roundedIcon">
                <base-icon-button mode="iconButton">
                    <icon-greater-than></icon-greater-than>
                </base-icon-button>
            </div>
        </div>

        <div class="coreServicesNavCircles">
            <base-icon-button mode="iconButton circle circle__active">
                <!-- <icon-circle></icon-circle> -->
            </base-icon-button>
            <base-icon-button mode="iconButton circle">
                <!-- <icon-circle></icon-circle> -->
            </base-icon-button>
            <base-icon-button mode="iconButton circle">
                <!-- <icon-circle></icon-circle> -->
            </base-icon-button>
        </div>
    </div>
</template>

<script>
import IconLessThan from "./icons/IconLessThan.vue";
import IconGreaterThan from "./icons/IconGreaterThan.vue";
import CoreServiceItem from "./CoreServiceItem.vue";
import IconRocket from "./icons/IconRocket.vue";
import IconWindowCode from "./icons/IconWindowCode.vue";
import IconHeadphones from "./icons/IconHeadphones.vue";
import IconNextArrowBlack from "./icons/IconNextArrowBlack.vue";
import IconCircle from "./icons/IconCircle.vue";

export default {
    components: {
        IconLessThan,
        IconGreaterThan,
        CoreServiceItem,
        IconRocket,
        IconCircle,
        IconWindowCode,
        IconHeadphones,
        IconNextArrowBlack

    }
}
</script>

<style scoped>
.coreServices {
    padding: 48px 8px 24px;
    background-image: url("../assets/img/bg-pic1.jpg");
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.prevButton {
    width: 10%;
    position: absolute;
    /* left: 0;
    top: 0;
    bottom: 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.coreServicesText {
    display: flex;
    /* width: 100%; */
}

.coreServiceItems {
    display: flex;
}

.item {
    color: #20345c;
    padding: 8px;
    margin: 10px;
    text-align: center;
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

.roundedIcon {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid;
}

.coreServicesNavCircles {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.circle {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid;
}

.circle__active {
    background-color: #bbb;
}
</style>